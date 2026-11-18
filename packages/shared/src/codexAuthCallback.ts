// @effect-diagnostics nodeBuiltinImport:off globalTimers:off - Native loopback helper uses a bounded Node listener with AbortController cleanup.
import * as Schema from "effect/Schema";
import * as NodeHttp from "node:http";
import { codexAuthorizationRequest, codexCallbackUrl } from "@t3tools/shared/codexAuthHandoff";

export class CodexAuthCallbackError extends Schema.TaggedError<CodexAuthCallbackError>()(
  "CodexAuthCallbackError",
  { detail: Schema.String },
) {
  override get message() {
    return this.detail;
  }
}

const listeners = new Map<string, AbortController>();

export function cancelCodexAuthCallback(authorizationUrl: string) {
  const { state } = codexAuthorizationRequest(authorizationUrl);
  listeners.get(state)?.abort();
}

function prefersZhCn(locale?: string, acceptLanguage?: string): boolean {
  if (locale === "zh-CN") return true;
  if (locale === "en") return false;
  return typeof acceptLanguage === "string" && /\bzh\b/i.test(acceptLanguage);
}

/** Receive an authorization code locally. Credentials and PKCE stay on the target environment. */
export async function receiveCodexAuthCallback(
  authorizationUrl: string,
  openBrowser: (url: string) => Promise<boolean>,
  destination?: (callbackUrl: string) => string,
  signal?: AbortSignal,
  locale?: "en" | "zh-CN",
) {
  const isZh = locale === "zh-CN";
  const request = codexAuthorizationRequest(authorizationUrl);
  if (listeners.has(request.state))
    throw new Error(
      isZh
        ? "当前电脑上已有一个正在进行的登录窗口，请先完成或关闭它。"
        : "This sign-in is already open on this computer.",
    );
  const abort = new AbortController();
  const interrupted = () => abort.abort();
  signal?.addEventListener("abort", interrupted, { once: true });
  listeners.set(request.state, abort);
  const callback = Promise.withResolvers<string>();
  // Keep early open/bind failures from leaving an unobserved rejection behind.
  void callback.promise.catch(() => undefined);
  const server = NodeHttp.createServer((incoming, response) => {
    const responseZh = prefersZhCn(locale, incoming.headers["accept-language"]);
    try {
      if (incoming.method !== "GET") throw new Error("method");
      const url = codexCallbackUrl(
        new URL(incoming.url ?? "/", request.redirectUri).toString(),
        request.redirectUri,
        request.state,
      ).toString();
      const returnUrl = destination?.(url);
      response.setHeader("cache-control", "no-store");
      response.setHeader("referrer-policy", "no-referrer");
      response.setHeader("x-content-type-options", "nosniff");
      if (returnUrl) {
        response.writeHead(303, { location: returnUrl }).end();
      } else {
        response.setHeader(
          "content-security-policy",
          "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'",
        );
        const html = responseZh
          ? '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><title>T3 Code</title><style>body{font-family:system-ui,-apple-system,"Microsoft YaHei",sans-serif;display:grid;place-items:center;min-height:90vh;margin:0}main{max-width:360px;padding:32px}h1{font-size:24px}p{line-height:1.6;opacity:.7}</style></head><body><main><h1>请返回 T3 Code</h1><p>已成功收到你的登录授权，T3 Code 正在完成连接。你现在可以关闭此浏览器页面了。</p></main></body></html>'
          : '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><title>T3 Code</title><style>body{font-family:system-ui;display:grid;place-items:center;min-height:90vh;margin:0}main{max-width:360px;padding:32px}h1{font-size:24px}p{line-height:1.6;opacity:.7}</style></head><body><main><h1>Return to T3 Code</h1><p>Your sign-in response has been received. T3 Code is finishing the connection. You can close this tab.</p></main></body></html>';
        response.writeHead(200, { "content-type": "text/html; charset=utf-8" }).end(html);
      }
      callback.resolve(url);
    } catch {
      response
        .writeHead(400, { "content-type": "text/plain; charset=utf-8" })
        .end(
          responseZh
            ? "该链接不属于当前正在进行的登录操作，请返回软件重新发起登录。"
            : "This response does not belong to the active sign-in.",
        );
    }
  });
  const cancelledMessage = isZh ? "已取消本次登录。" : "Sign-in cancelled on this computer.";
  const cancelled = () => callback.reject(new Error(cancelledMessage));
  abort.signal.addEventListener("abort", cancelled, { once: true });
  const timer = setTimeout(
    () =>
      callback.reject(
        new Error(isZh ? "登录等待超时，请返回软件重试。" : "Sign-in expired. Try again."),
      ),
    300_000,
  );
  timer.unref();
  try {
    if (signal?.aborted) throw new Error(cancelledMessage);
    await new Promise<void>((resolve, reject) => {
      server.once("error", () =>
        reject(
          new Error(
            isZh
              ? "用于接收登录结果的本地端口正被占用。请先关闭其他正在登录的窗口后重试，或直接把浏览器跳转后的网址粘贴回 T3 Code。"
              : "The ChatGPT callback port is in use on this computer. Close the other sign-in and try again, or paste the redirect URL in T3 Code.",
          ),
        ),
      );
      server.listen(Number(new URL(request.redirectUri).port), "127.0.0.1", resolve);
    });
    if (abort.signal.aborted) throw new Error(cancelledMessage);
    const opened = await Promise.race([openBrowser(request.authorizationUrl), callback.promise]);
    if (!opened)
      throw new Error(
        isZh ? "无法打开系统默认浏览器进行登录。" : "Could not open your sign-in browser.",
      );
    return await callback.promise;
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", interrupted);
    abort.signal.removeEventListener("abort", cancelled);
    listeners.delete(request.state);
    server.closeAllConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}
