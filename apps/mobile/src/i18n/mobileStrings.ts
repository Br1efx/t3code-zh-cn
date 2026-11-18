import type { AlertButton, AlertOptions } from "react-native";

export type MobileLocale = "en" | "zh-CN";

export const MOBILE_LOCALE: MobileLocale =
  process.env.EXPO_PUBLIC_APP_LOCALE === "zh-CN" ? "zh-CN" : "en";

const ZH_CN_MESSAGES = {
  "Some attachments could not be copied. Reconnect to the source environment and copy them again.":
    "部分附件无法复制。请重新连接来源设备后再次复制。",
  "Some context is unavailable": "部分上下文不可用",
  "Those references are marked unavailable.": "这些引用内容目前不可用。",
  Close: "关闭",
  "New thread": "新建对话",
  "The PDF could not be loaded.": "无法加载 PDF。",
  "Could not load PDF": "无法加载 PDF",
  "Loading PDF...": "正在加载 PDF…",
  "The PDF could not be rendered. It may be damaged or password protected.":
    "无法显示此 PDF，文件可能已损坏或设有密码。",
  Success: "成功",
  "Close tab": "关闭标签页",
  Paste: "粘贴",
  "Could not close this browser tab": "无法关闭此浏览器标签页",
  "Could not read the clipboard": "无法读取剪贴板",
  "Refreshing environments": "正在刷新运行设备",
  "What to try": "建议尝试",
  "Copy diagnostics": "复制诊断信息",
  "More info": "更多信息",
  Collapse: "收起",
  Expand: "展开",
  "This connection still uses the old permissions, so some actions may no longer be available. Pair again using a new link with the permissions you need.":
    "此连接仍使用旧权限，部分操作可能无法使用。请生成包含所需权限的新链接重新配对。",
  "Got it": "知道了",
  Overview: "概览",
  Activity: "动态",
  "Discard changes?": "放弃更改？",
  Discard: "放弃",
  Dark: "深色",
  Projects: "项目",
  Notifications: "通知",
  "Updates from your active threads": "来自进行中对话的最新动态",
  Name: "名称",
  Continue: "继续",
  Prompt: "提示词",
  Rename: "重命名",
  Copy: "复制",
  Menu: "菜单",
  "Back 15 seconds": "后退 15 秒",
  "Loading…": "正在加载…",
  Pause: "暂停",
  Play: "播放",
  "Forward 15 seconds": "前进 15 秒",
  "This audio could not be played. Try again or save it to open in another app.":
    "无法播放此音频。请重试，或保存后用其他应用打开。",
  "File options": "文件选项",
  "Close file search": "关闭文件搜索",
  "Clear file search": "清除文件搜索",
  "Back to document": "返回文档",
  Home: "主页",
  "Filter threads": "筛选对话",
  Code: "代码",
  Tests: "测试",
  Mocks: "模拟数据",
  Generated: "生成的文件",
  Docs: "文档",
  State: "状态",
  Involvement: "参与方式",
  "Copy link": "复制链接",
  "Share…": "分享…",
  "Search pull requests": "搜索合并请求",
  "Filter pull requests": "筛选合并请求",
  "Failed to share pull request link.": "无法分享合并请求链接。",
  "This diff is too large to show in full.": "这次修改内容过多，无法完整显示。",
  "Clear package search": "清除包搜索",
  Filter: "筛选",
  Path: "路径",
  Test: "条件",
  "Values, comma-separated": "多个值请用英文逗号分隔",
  Value: "值",
  "Add filter": "添加筛选条件",
  "Runs only when every filter matches. Other requests are logged as filtered. Separate “is one of” values with commas; a value can't contain a comma.":
    "仅在满足全部筛选条件时运行，其余请求会记为已过滤。“属于以下之一”的多个值请用英文逗号分隔，单个值内不能包含逗号。",
  "Invalid filter": "筛选条件无效",
  "Invalid webhook settings": "Webhook 设置无效",
  "Each dedupe key must contain a valid request placeholder. The coalesce window must be whole seconds from 10 to 3600, or blank.":
    "每个去重键都必须包含有效的请求占位符。合并等待窗口须为 10 至 3600 之间的整数秒，或留空。",
  "Replay key template": "防重复键模板",
  "Coalesce key template": "请求合并键模板",
  "Coalesce window (seconds, 10–3600)": "合并等待时间（秒，10–3600）",
  "Replay keys suppress repeats for 7 days. Coalescing runs the latest payload when the window from the first delivery closes. Empty keys run normally.":
    "防重复键会在 7 天内忽略相同的重复请求；合并等待会在首次收到请求后的等待时间结束时，仅用最新一次请求内容运行。留空则每次正常触发。",
  "Start from remote": "基于远程最新代码创建",
  "Uses the latest commit of the base branch’s tracked remote branch, even if its name differs. Otherwise uses the same-named branch on origin. Uses your local branch if that remote branch is missing.":
    "优先基于基础分支所关联远程分支的最新代码创建；若未关联远程分支，则使用远程代码库中的同名分支；若远程也没有，则直接使用本地分支。",
  "Render math": "显示数学公式",
  "Old history is cleaned up automatically, but this database still holds the freed space. Run this command on":
    "旧历史记录会自动清理，但数据库文件仍占用着已释放的空间。请在以下设备上运行此命令回收空间：",
  "Copy command": "复制命令",
  Dismiss: "关闭",
  "Use environment defaults for this project": "此项目跟随设备默认设置",
  Failure: "失败",
  "Could not save settings": "未能保存设置",
  "Could not copy": "无法复制",
  "Source control": "代码版本管理",
  "Open PR": "打开合并请求 (PR)",
  "Touch and hold for actions.": "长按可查看更多操作。",
  "Waiting for host state": "正在等待设备响应",
  "Clear branch search": "清除分支搜索",
  "Attached thread unavailable": "引用的对话不可用",
  "Client not supported": "当前客户端暂不支持",
  Cloning: "正在下载仓库",
  "Remove project": "移除项目",
  "Close arrange threads": "完成对话排序",
  "Resume queue": "恢复发送队列",
  "View instructions": "查看指令",
  "Copy skill": "复制技能",
  "Open thread": "打开对话",
  "Linked pull requests": "已关联的合并请求 (PR)",
  "No linked pull requests.": "暂无关联的合并请求。",
  "Link pull request": "关联合并请求",
  "Queue paused": "发送队列已暂停",
  "The server did not report whether this project is at the repository root, so this worktree cannot be reused safely. Update the server or choose another branch.":
    "服务端未返回此项目是否位于仓库根目录，暂时无法安全复用这个独立目录。请升级服务端或改选其他分支。",
  "This project is a repository subdirectory. Choose another branch or add the repository root as a project to reuse this worktree.":
    "此项目位于代码仓库的子文件夹中。请改选其他分支，或把仓库根目录添加为项目后再复用该独立目录。",
  "Cancel commit": "取消提交",
  "You’re on the default branch. You can create a new branch when committing.":
    "你当前在主分支上，可以在提交改动的同时新建一个分支。",
  "Describe your changes…": "简要说明这次改了什么…",
  "Leave empty to generate a message automatically.": "留空即可自动生成提交说明。",
  "Deselect all": "取消全选",
  "Select all": "全选",
  "No changed files to commit.": "没有需要提交的文件改动。",
  "Commit on a new branch": "新建分支并提交",
  "Attach a pull request by URL or number": "输入网址或编号关联合并请求",
  "Loading output…": "正在加载输出…",
  "No output.": "暂无输出。",
  "Earlier output not shown": "已省略较早的输出内容",
  "Opens this agent's thread": "打开该智能体的对话",
  Thread: "对话",
  "Workflow started": "工作流已启动",
  "Show less": "收起",
  "Show full script": "展开完整脚本",
  "Couldn't link this pull request": "未能关联此合并请求",
  "Couldn't unlink this pull request": "未能取消关联此合并请求",
  "Pull request URL or #42": "合并请求网址或编号（如 #42）",
  Link: "关联",
  "Use a pull request URL, 123, or #123.": "请输入合并请求网址、数字编号（如 123）或 #123。",
  "Stop watching": "取消关注动态",
  "Watch for changes": "关注后续变动",
  "Dismiss from thread": "从当前对话隐藏",
  "Unlink from thread": "取消与当前对话关联",
  "Couldn't change watching": "未能更新关注状态",
  Steer: "中途引导",
  "Even pace:": "理想匀速：",
  "Close search": "关闭搜索",
  "Pull requests": "合并请求 (PR)",
  "The server did not return a PDF. Check the connection and try again.":
    "服务端未返回 PDF 文件，请检查连接后重试。",
  "Your edit is still in the composer.": "你刚才编辑的内容仍保留在输入框中。",
  "No limits available": "暂无额度信息",
  "Subscription remaining": "订阅剩余额度",
  "Reset time unavailable": "暂无重置时间",
  "As of": "统计截至",
  "New threads": "新建对话",
  "Agent behavior": "智能体行为",
  "Provider accounts": "AI 服务账号",
  Maintenance: "维护与清理",
  "Thread behavior": "对话管理",
  "About T3 Code": "关于 T3 Code",
  Organization: "列表整理",
  "Project overview": "项目概览",
  Keyboard: "键盘",
  Microphone: "麦克风",
  "Follow-ups": "追加消息",
  "Scheduled Tasks": "定时任务",
  "Scheduled tasks": "定时任务",
  "New scheduled task": "新建定时任务",
  "Edit scheduled task": "编辑定时任务",
  Diagnostics: "运行诊断",
  "Open source licenses": "开源软件许可",
  "License notice": "开源许可声明",
  "Go back": "返回",
  "Add Project": "添加项目",
  Page: "网页",
  Selection: "选中内容",
  "Requested changes": "修改要求",
  Element: "网页元素",
  Selector: "元素定位符",
  Styles: "外观样式",
  File: "文件",
  Skill: "技能",
  Description: "说明",
  "Open attachment": "打开附件",
  "Open pull request": "打开合并请求",
  "Remove from draft": "从草稿中移除",
  "Copying context…": "正在复制上下文…",
  "Opening document…": "正在打开文档…",
  "Copy details": "复制错误详情",
  "Try again. If it keeps happening, copy the details for a bug report.":
    "请重试。如果问题反复出现，可复制错误详情用于反馈。",
  "More actions": "更多操作",
  Done: "完成",
  "Dismiss message": "关闭提示",
  "Archived threads": "已归档的对话",
  Unarchive: "移出归档",
  "Close browser": "关闭浏览器",
  Back: "后退",
  Forward: "前进",
  Address: "网址",
  "Enter a URL": "输入网址",
  "Reload page": "刷新网页",
  Tabs: "标签页",
  "Browser tab options": "标签页选项",
  "Fit to screen": "适应屏幕大小",
  "Hard reload": "强制刷新网页",
  "Zoom in": "放大",
  "Zoom out": "缩小",
  "Actual size": "实际大小",
  Viewport: "画面尺寸",
  "Site data": "网站缓存与登录状态",
  "Clear cookies": "清除登录状态 (Cookie)",
  "Clear cache": "清除网页缓存",
  "Dialog response": "网页弹窗回复",
  Accept: "确定",
  "Take control to respond.": "请先手动接管网页再点击确认。",
  "Opens the browser tab full screen": "全屏查看此网页标签",
  "Close floating preview": "关闭悬浮小窗",
  "Watch and control browser tabs open in this thread": "查看或操作当前对话中打开的网页",
  "Refresh environments": "刷新运行设备",
  "No servers registered": "尚未绑定任何设备",
  "Registered servers": "已绑定的设备",
  "Connections on this device are managed in Settings.": "请在「设置」中管理本机的设备连接。",
  Deregister: "解除绑定",
  "Reconnect environment": "重新连接设备",
  "Remove environment": "移除设备",
  "Reach your machines from anywhere, no network setup.":
    "随时随地远程连接你的电脑，免去繁琐的网络配置。",
  "Or enter it": "或手动输入",
  "Tap to scan": "点击扫码连接",
  "Scan the code from t3 pair or desktop Connections settings":
    "扫描电脑端「设置 → 共享与访问权限」或 t3 pair 命令显示的二维码",
  "Or use the managed relay": "或通过官方云端中转连接",
  Off: "关闭",
  "Read PRs": "仅查看合并请求",
  "Read and act": "查看并允许操作",
  "Hide device controls": "隐藏设备控制栏",
  "Close device preview": "关闭模拟器画面",
  "Show device controls": "显示设备控制栏",
  "Device options": "模拟器选项",
  "Connecting to device...": "正在连接模拟器…",
  "Reload stream": "重新加载画面",
  "App switcher": "应用切换器",
  "Rotate device": "旋转屏幕",
  Devices: "手机模拟器",
  Reconnect: "重新连接",
  "No preview for this file": "此文件暂不支持预览",
  "Preview limited to the first 1 MB. Save or share the file to read it in full.":
    "预览仅显示前 1 MB 内容。保存或分享文件即可查看全文。",
  "Table limited to the first 100 rows and 30 columns. Source shows the rest.":
    "表格预览仅展示前 100 行和 30 列，其余内容可查看源文件。",
  "More search results available. Refine your search to see them.":
    "匹配结果较多，请进一步输入关键词缩小范围。",
  "Open PDF": "打开 PDF",
  "Filter threads by environment": "按运行设备筛选对话",
  "Filter threads by project": "按项目筛选对话",
  "Reset thread filters": "重置对话筛选",
  "Opens environment settings": "打开运行设备设置",
  "Close command palette": "关闭命令面板",
  "Search commands, projects, and threads": "搜索命令、项目和对话",
  "Search commands, projects, and threads…": "搜索命令、项目和对话…",
  "New thread in…": "选择位置新建对话…",
  "The sidebar couldn't be displayed": "无法显示侧边栏",
  "The inspector couldn't be displayed": "无法显示详情面板",
  "Make pane wider": "加宽面板",
  "Make pane narrower": "缩窄面板",
  "Review files": "审阅改动文件",
  "Filter review files": "筛选审阅文件",
  "Test files are hidden from this review.": "当前审阅已隐藏测试文件。",
  "Show test files": "显示测试文件",
  "Loading changed files": "正在加载改动文件",
  "Hide test files": "隐藏测试文件",
  "Diff options": "对比显示选项",
  "Word wrap": "自动换行",
  "Only test files changed": "本次仅修改了测试文件",
  "Retry loading remaining files": "重新加载其余文件",
  "Submit review": "提交审阅意见",
  "Add comment": "添加评论",
  "Copy line": "复制此行",
  "Start tour": "开始导览",
  "Guide options": "导览选项",
  "Runs on": "运行设备",
  Task: "任务",
  "Check for issues": "排查问题",
  Context: "上下文",
  Model: "模型",
  Workspace: "工作目录",
  "Run in": "运行位置",
  "Checkout path": "本地项目目录",
  Schedule: "执行时间",
  Repeat: "重复周期",
  "Skip requests older than (minutes)": "跳过超过此时长的旧请求（分钟）",
  "Run every request": "逐条执行每次请求",
  "Minutes between runs": "两次运行最小间隔（分钟）",
  "Task enabled": "定时任务已启用",
  "This task no longer exists.": "该定时任务已被删除。",
  Time: "时间",
  Edit: "编辑",
  "Save changes": "保存修改",
  "Create task": "创建定时任务",
  "Rotating…": "正在更换网址…",
  "Rotate URL": "更换触发网址",
  "Terminal output": "终端输出",
  "Attach output": "附带输出内容",
  "Could not load terminals": "无法加载终端列表",
  "Loading terminals": "正在加载终端",
  "Reading existing terminal sessions.": "正在读取已打开的终端窗口。",
  "Custom snooze": "自定义延后时间",
  "Cancel custom snooze": "取消自定义延后",
  "Show app": "显示应用",
  "Model unavailable. Open model settings.": "当前模型不可用，请打开模型设置。",
  "Open parent": "打开上级对话",
  "Arrange threads": "整理对话顺序",
  "Load earlier activity": "加载更早的动态",
  "Loading earlier activity…": "正在加载更早的动态…",
  "Open terminal": "打开终端",
  "Retry workspace preparation": "重新准备工作目录",
  "Worktree setup": "准备独立目录",
  "Cancel setup": "取消准备",
  "Work locally": "直接在原目录进行",
  "Close setup details": "收起准备详情",
  "Select a pull request": "选择合并请求",
  PRs: "合并请求 (PR)",
  "24h": "24 小时",
  "7d": "7 天",
  "30d": "30 天",
  "90d": "90 天",
  "New project": "新建项目",
  "Start a new Git repository from a name": "输入名称以创建新的 Git 仓库",
  "Created without a first commit": "项目已创建，但未完成首次提交",
  "Could not create the GitHub repository": "无法创建 GitHub 仓库",
  "The project was created but has not reached this device yet. It will appear in the project list once the connection catches up.":
    "项目已创建，正在同步到当前设备，稍后即会出现在项目列表中。",
  "Project name": "项目名称",
  "Create private repository on GitHub": "在 GitHub 上创建私有仓库",
  "Create project": "创建项目",
  "Add existing project": "添加已有项目",
  "Open a folder or clone a repository": "打开本地文件夹或下载远程仓库",
  Creates: "创建位置：",
  "Goes in": "存放位置：",
  "Could not switch machine": "无法切换运行设备",
  "The folder for threads without a project could not be created.":
    "无法为不绑定项目的对话创建专属文件夹。",
  "It has not reached this device yet. Try again.": "尚未同步到此设备，请重试。",
  "Could not start without a project": "无法在不关联项目的情况下启动",
  "It has not reached this device yet. Pick No project from the list once it appears.":
    "尚未同步到此设备。同步完成后，请在列表中选择“不关联项目”。",
  "No project": "不关联项目",
  "Start a task without a project": "不关联项目直接开始对话",
  "Start without a project": "不关联项目并开始",
  "What should we work on?": "今天想做点什么？",
  "Choose a project": "选择项目",
  "Opens the project picker": "打开项目选择器",
  "Search projects": "搜索项目",
  "Try a different project name or workspace path.": "请换个项目名称或文件夹路径试试。",
  "No matching projects": "没有匹配的项目",
  "Clear model search": "清除模型搜索",
  Enable: "启用",
  "Requires access to your Cursor login in macOS Keychain.":
    "需要读取 macOS 钥匙串中的 Cursor 登录状态。",
  "Manage usage": "管理用量统计",
  "ChatGPT shared usage": "ChatGPT 共享用量",
  Account: "账号",
  Actions: "快捷操作",
  "Add attachment": "添加附件",
  "Add Comment": "添加评论",
  "Add Environment": "添加运行设备",
  "Add environment": "添加运行设备",
  "Add image": "添加图片",
  "Add new project": "添加新项目",
  "Add project": "添加项目",
  "Add an environment before creating a task.": "请先连接一台运行设备，再新建对话。",
  "Add an environment to load projects and start coding sessions.":
    "连接你的电脑或服务器后，即可加载项目并开始对话。",
  "All environments": "所有运行设备",
  "All projects": "所有项目",
  "All providers": "所有 AI 服务",
  "Allow camera": "允许使用相机",
  "Allow camera access to scan an environment pairing QR code.": "允许使用相机扫描设备配对二维码。",
  "Allow once": "仅允许一次",
  "Allow session": "本次对话内允许",
  App: "应用",
  Appearance: "外观",
  "Approval needed": "待你批准",
  Approval: "待批准",
  Archive: "归档",
  "Archived thread options": "归档对话选项",
  "Archived Threads": "已归档的对话",
  "Ask anything…": "想让智能体帮你做什么…",
  "Ask the agent to inspect the repo, run a command, or continue the active thread.":
    "让智能体查看项目代码、运行命令，或继续当前对话。",
  "Ask the repo agent, or run a command…": "向智能体提问，或运行命令…",
  "Auto-settle merged threads": "合并后自动归入已办",
  "Auto-accept edits": "自动允许修改文件",
  Auto: "自动",
  Available: "可用",
  "Awaiting Input": "等你回复",
  "Back to chat": "返回对话",
  Branch: "分支",
  "Base branch": "基础分支",
  "Branch changes": "分支改动",
  "Branches & worktrees": "分支与独立目录",
  "Browse a folder on disk": "浏览电脑上的文件夹",
  "Browse folders": "浏览文件夹",
  "By model": "按模型统计",
  "Cache savings": "缓存节省费用",
  "Cached input": "缓存命中输入",
  "Camera access needed": "需要相机权限",
  "Camera access was denied for this app. Open Settings to enable it.":
    "相机权限已被关闭，请前往系统设置开启。",
  "Camera permission is required to scan a QR code.": "扫码配对需要开启相机权限。",
  Cancel: "取消",
  "Cancel new task": "取消新建对话",
  "Cancel thread settings": "取消对话设置",
  Catalog: "模型列表",
  "Changed files": "改动的文件",
  "Choose project": "选择项目",
  "Choose model": "选择模型",
  "Choose a thread from the sidebar or start a new task.": "从左侧选择一条对话，或新建对话。",
  "Choose another environment or create a new task.": "切换其他运行设备，或新建对话。",
  "Choose another project or create a new task.": "切换其他项目，或新建对话。",
  "Choose branch": "选择分支",
  "Choose Files": "选择文件",
  Clear: "清空",
  "Clear all client caches?": "确定清空本机所有离线缓存吗？",
  "Clear search": "清除搜索",
  "Clearing caches never removes environment connections, credentials, account data, or appearance preferences.":
    "清空缓存不会删除已绑定的设备连接、登录凭证、账号信息或外观设置。",
  Clean: "无未提交改动",
  "Client Storage": "本机离线缓存",
  "Client storage is temporarily unavailable. Try again after restarting the app.":
    "本机缓存暂时无法访问，请重启应用后再试。",
  "Clone project": "下载远程项目",
  "Close scanner": "关闭扫码框",
  "Close legal document": "关闭法律文档",
  "Close new task": "关闭新建窗口",
  "Code & Diffs": "代码与改动对比",
  "Collapse user input": "收起用户输入",
  "Color scheme": "深浅色模式",
  Commands: "命令",
  Comment: "评论",
  Commit: "提交保存",
  "Commit changes": "提交改动",
  "Commit message": "提交说明",
  "Commit on new branch": "新建分支并提交",
  "Commit, files, branches": "提交、文件与分支",
  Configuration: "设置项",
  Confirm: "确认",
  "Confirm action": "确认操作",
  "Connect an environment to see usage.": "连接运行设备后即可查看用量。",
  Connected: "已连接",
  Connecting: "正在连接",
  "Connecting to environment": "正在连接运行设备",
  "Connection failed": "连接失败",
  Copied: "已复制",
  "Copy code": "复制代码",
  "Copy message": "复制消息",
  "Copy path": "复制路径",
  "Copy trace ID": "复制调用链编号",
  "Could not cancel import": "未能取消导入",
  "Could not change project": "未能切换项目",
  "Could not delete pending task": "未能删除待发送对话",
  "Could not import shared content": "未能导入分享内容",
  "Could not load every archive": "部分归档记录加载失败",
  "Could not load T3 Connect environments": "未能加载 T3 云端互联设备",
  "Could not load conversation": "无法加载对话内容",
  "Could not read limits.": "无法读取额度信息。",
  "Could not archive thread": "未能归档对话",
  "Could not delete thread": "未能删除对话",
  "Could not settle thread": "未能将对话归入已办",
  "Could not unarchive thread": "未能移出归档",
  "Could not un-settle thread": "未能移回待办",
  "Could not move thread": "未能移动对话",
  "Could not pin thread": "未能置顶对话",
  "Could not queue task": "未能加入发送队列",
  "Could not regenerate title": "未能重新生成标题",
  "could not report usage.": "无法获取用量统计。",
  "Could not snooze thread": "未能设置延后提醒",
  "Could not start task": "未能发起对话",
  "Could not switch branch": "未能切换分支",
  "Could not restore draft": "未能恢复草稿",
  "Could not unpin thread": "未能取消置顶",
  "Could not update environment": "未能更新设备设置",
  "Could not wake thread": "未能提前恢复对话",
  "Create & checkout": "创建并切换到此分支",
  "Create a task to start a new coding session.": "新建一条对话，让智能体开始帮你处理任务。",
  "Create worktree": "新建独立目录",
  "Created at": "按添加时间",
  "Custom font size": "自定义字号",
  Decline: "拒绝",
  Default: "默认",
  "Default grouping": "默认分组",
  "Delete pending task?": "删除这条待发送对话？",
  "Device Notifications": "手机推送通知",
  "Dismiss voice input error": "关闭语音输入提示",
  "Disable notifications": "关闭通知",
  "Dismiss keyboard": "收起键盘",
  Environment: "运行设备",
  "Environment caches": "各设备离线缓存",
  "Environment unavailable": "运行设备暂不可用",
  Error: "出错",
  "Excluded from this commit": "不纳入本次提交",
  "Existing branches": "已有分支",
  Failed: "失败",
  "Feature branch & continue": "新建功能分支并继续",
  "File actions": "文件操作",
  "File unavailable": "文件不可用",
  Files: "文件",
  "Files unavailable": "文件列表不可用",
  "Fill in the pending answers": "请填写待回答的问题",
  "Filter and sort archived threads": "筛选和排序已归档对话",
  "Filter and sort threads": "筛选和排序对话",
  "Filter models": "筛选模型",
  "Find a branch": "搜索分支",
  "Find a model": "搜索模型",
  "Full access": "直接执行（免确认）",
  "Font size": "字号",
  General: "常规",
  Host: "设备地址",
  "Image unavailable": "图片不可用",
  "Markdown image": "图片",
  Input: "待回复",
  "Inspect turn diffs, worktree changes, and base branch diff":
    "查看每轮回复改动、当前目录改动与分支对比",
  "Inspecting cached data…": "正在统计缓存大小…",
  "Invalid QR code": "二维码无效",
  Label: "显示名称",
  "Latest turn": "最新一轮回复",
  "Last user message": "按最近提问时间",
  "Live Activity Updates": "锁屏实时动态更新",
  Light: "浅色",
  "Leave a comment...": "写下你的意见…",
  "Leave empty to auto-generate": "留空即可自动生成",
  Legacy: "旧版兼容项",
  "Legacy models": "旧版模型",
  "Legacy Thread List": "经典对话列表",
  Legal: "法律与隐私",
  "Loading archive...": "正在加载归档记录…",
  "Loading branches...": "正在加载分支…",
  "Loading branches…": "正在加载分支…",
  "Loading diff…": "正在加载改动对比…",
  "Loading file...": "正在加载文件…",
  "Loading image...": "正在加载图片…",
  "Loading image…": "正在加载图片…",
  "Loading linked cloud environments.": "正在加载已关联的云端设备。",
  "Loading environments": "正在加载运行设备",
  "Loading messages...": "正在加载对话内容…",
  "Loading projects and threads from the saved environment.": "正在从已连接设备加载项目和对话。",
  "Loading projects from the saved environment.": "正在从已连接设备加载项目。",
  "Loading task": "正在加载对话",
  Limits: "额度",
  "Local folder": "本地文件夹",
  "Managed by T3 Connect. Tunnel details update automatically.":
    "由 T3 云端互联自动维护连接地址，无需手动修改。",
  "Messages, labels, and headings scale with this size.": "对话文字、按钮和标题都会按此字号缩放。",
  "Mobile control surface for your live coding environments":
    "在手机上随时查看和指挥电脑上的智能体",
  "Cloud VM": "云端服务器",
  "Mac mini": "Mac mini",
  "Mac Studio": "Mac Studio",
  "Model and reasoning settings": "模型与思考深度设置",
  "Model filters": "模型筛选",
  "Microphone unavailable": "麦克风不可用",
  "Move down": "下移",
  "Move up": "上移",
  "Messages not cached": "对话内容尚未缓存",
  More: "更多",
  "more files": "个其他文件",
  "Navigate up": "返回上一级",
  "Native terminal unavailable. Using text fallback.": "原生终端暂不可用，已切换为纯文本模式。",
  "New branch": "新建分支",
  "New task": "新建对话",
  "New Task": "新建对话",
  "New Thread": "新建对话",
  "New worktree": "新建独立目录",
  "Newest first": "最新在前",
  "No activity in this window.": "该时间段内没有用量记录。",
  "No additional linked cloud environments.": "暂无其他可添加的云端设备。",
  "No cached data": "暂无离线缓存",
  "No changed files are available to commit.": "没有需要提交的文件改动。",
  "No changes": "无改动",
  "No conversation yet": "还没有对话内容",
  "No environments connected yet.": "尚未连接任何运行设备。",
  "No environments connected": "尚未连接运行设备",
  "No files found": "未找到文件",
  "No local branches found.": "未找到本地分支。",
  "No matching models": "没有匹配的模型",
  "No matching commands.": "没有匹配的命令。",
  "No matching files or folders.": "没有匹配的文件或文件夹。",
  "No open PR": "暂无合并请求",
  "No project scripts": "暂无快捷运行脚本",
  "No projects found": "未找到项目",
  "No results": "没有找到结果",
  "No review diffs": "没有可审阅的改动内容",
  "No selection": "尚未选择内容",
  "No threads yet": "还没有对话",
  "No skills found.": "未找到可用技能。",
  "No results.": "没有找到结果。",
  "Not a git repository": "不是 Git 代码仓库",
  "Not a repo": "非代码仓库",
  "Not connected": "未连接",
  "Notifications disabled": "通知已关闭",
  "Notifications enabled": "通知已开启",
  "Notifications unavailable": "通知不可用",
  "Notifications were denied for this app. Open Settings to enable them.":
    "通知权限已被关闭，请前往系统设置开启。",
  "Notifications were not enabled.": "未能开启通知。",
  "Offline cache records will appear here after environments are used.":
    "连接设备使用后，离线缓存数据会显示在这里。",
  "Oldest first": "最早在前",
  "Open files": "浏览项目文件",
  "Open in Browser": "在浏览器中打开",
  "Open in browser": "在浏览器中打开",
  "Open in Safari": "在浏览器中打开",
  "Open legal documents in external browser": "用系统浏览器打开法律文档",
  "Open new terminal": "新建终端窗口",
  "Open terminal to start a shell.": "打开终端即可输入命令行指令。",
  "Open settings": "打开设置",
  "Open microphone settings": "打开麦克风设置",
  Offline: "离线",
  "Opt into retired interfaces kept for compatibility. Plan Mode restores the Build/Plan control; otherwise every task runs in Build mode.":
    "开启旧版兼容界面。“方案模式”可恢复“方案 / 执行”切换按钮；关闭时默认直接执行。",
  Options: "选项",
  "Or type a custom answer": "或自己输入其他回答",
  Output: "输出",
  "Pairing code": "配对码",
  "Partial diff": "仅展示部分改动",
  "Partial file": "仅展示部分文件内容",
  Pending: "等待中",
  "Plain text": "纯文本",
  "Plan Mode": "方案模式",
  Plan: "先出方案",
  Build: "直接执行",
  "Plan Ready": "方案已生成",
  "Photo Library": "手机相册",
  Preparing: "正在准备",
  "Preparing voice input": "正在准备语音输入",
  Pin: "置顶",
  "Preparing image preview...": "正在准备图片预览…",
  "Preparing preview...": "正在准备预览…",
  Preview: "预览",
  "Preview failed": "预览加载失败",
  "Preview limited to the first 1 MB of a truncated file.": "文件较大，仅预览前 1 MB 内容。",
  "Processed tokens": "总消耗 Token",
  Photos: "相册",
  Project: "项目",
  "Project already exists": "该项目已添加过",
  "Project Grouping": "合并同名项目",
  Provider: "AI 服务",
  Providers: "AI 服务",
  Reasoning: "思考深度",
  Reconnecting: "正在重新连接",
  "Reconnect this environment to load the conversation.": "重新连接该设备后即可查看完整对话。",
  "Regenerate title": "重新生成标题",
  "Regenerating…": "正在重新生成…",
  "Pull latest": "同步最新代码",
  Queued: "排队待发",
  "queued message": "条待发送消息",
  Refresh: "刷新",
  "Refresh models": "刷新模型列表",
  "Refresh archived threads": "刷新已归档对话",
  "Refresh files": "刷新文件列表",
  "Remove environment?": "移除这台设备？",
  Repository: "代码仓库",
  Reset: "重置",
  "Resize detail pane": "调整详情面板宽度",
  "Restart the app and try again.": "请重启应用后再试。",
  "Retry now": "立即重试",
  "Return home": "返回首页",
  "Return to chat": "返回对话",
  "Review changes": "查看改动对比",
  "Review unavailable": "改动对比暂不可用",
  "Run command": "运行命令",
  "Route not found": "找不到此页面",
  Runtime: "运行方式",
  Save: "保存",
  "Scan QR Code": "扫码配对",
  "Scan QR code": "扫码配对",
  "Scanning provider transcripts…": "正在统计各 AI 服务历史用量…",
  "Scroll to end": "跳到底部",
  Search: "搜索",
  "Search archived threads": "搜索已归档对话",
  "Search files": "搜索文件",
  "Search threads": "搜索对话",
  "Select a diff line or range first.": "请先点击选择一行或几行改动代码。",
  "Select a thread": "选择一条对话",
  "Select diff": "选择对比范围",
  "Select review diff": "选择要查看的改动范围",
  "Set up T3 Connect": "开启 T3 云端互联",
  Settle: "归入已办",
  Settings: "设置",
  "Shared content unavailable": "分享的内容已失效",
  "Show keyboard": "弹出键盘",
  "Show legacy models": "显示旧版模型",
  "Show threads from every environment": "显示所有设备上的对话",
  "Show threads from every project": "显示所有项目的对话",
  "Sign in to T3 Connect": "登录 T3 云端互联",
  "Sign in to your T3 account to set up T3 Connect.": "登录你的 T3 账号即可开启跨设备远程互联。",
  "Sign in": "登录",
  Skills: "技能",
  Snooze: "延后提醒",
  "Snooze until": "延后提醒至",
  "Some environments are still reporting. Totals are partial.":
    "部分设备正在统计中，当前汇总尚不完整。",
  "Some shared content was skipped": "已跳过部分不支持的分享内容",
  "Sort by archived date": "按归档时间排序",
  "Sort projects": "项目排序",
  "Sort threads": "对话排序",
  Source: "来源",
  "Start another shell for this thread": "为当前对话再开一个终端窗口",
  "Start dictation": "开始语音输入",
  "Start from origin": "基于远程最新代码",
  "Start or reconnect an environment before adding a project.":
    "添加项目前，请先启动或重新连接运行设备。",
  Stop: "停止",
  "Stop agent": "停止智能体",
  Supervised: "操作前先询问",
  System: "跟随系统",
  "Syncing messages...": "正在同步最新消息…",
  Transcribing: "正在识别语音",
  "Storage unavailable": "存储空间不可用",
  "Submit answers": "提交回答",
  "Switch branch, create branch, or move to a worktree": "切换分支、新建分支，或移到独立目录",
  "T3 Account": "T3 账号",
  "T3 Code works locally without signing in. Cloud features are optional.":
    "不登录账号也能在本地正常使用 T3 Code，云端互联为可选功能。",
  Tap: "点击",
  Terminal: "终端",
  "Terminal options": "终端选项",
  "Terminal unavailable": "终端不可用",
  Text: "文本",
  "Text size": "文字大小",
  "That snooze time has passed. Choose another time.":
    "所选提醒时间已经过去了，请重新选择将来的时间。",
  "The image could not be loaded into the local cache.": "无法缓存该图片。",
  "The pull request could not be opened.": "无法打开该合并请求 (PR)。",
  "The shared content is no longer in the inbox. You can continue editing this task draft.":
    "分享的内容已移出收件箱，你仍可继续编辑当前草稿。",
  Themes: "主题配色",
  "This branch does not have an open pull request.": "当前分支还没有开启中的合并请求 (PR)。",
  "The connected environment did not report any projects.": "已连接的设备上还没有添加任何项目。",
  "The pending task could not be removed.": "未能移除这条待发送对话。",
  "This thread was deleted or is no longer available.": "该对话已被删除或不再可用。",
  "This environment's server does not support pinned reordering yet. Update the server to reorder pins.":
    "该设备上的服务端版本较旧，升级后即可拖动调整置顶顺序。",
  "This environment's server does not support pinning yet. Update the server to use Pin.":
    "该设备上的服务端版本较旧，升级后即可置顶对话。",
  "This environment's server does not support settling yet. Update the server to use Settle.":
    "该设备上的服务端版本较旧，升级后即可将对话归入已办。",
  "This environment's server does not support snoozing yet. Update the server to use Snooze.":
    "该设备上的服务端版本较旧，升级后即可使用延后提醒功能。",
  "This environment's server does not support snoozing yet. Update the server to wake this thread.":
    "该设备上的服务端版本较旧，升级后即可提前恢复此对话。",
  "This environment's server does not support title regeneration yet. Update the server to regenerate thread titles.":
    "该设备上的服务端版本较旧，升级后即可重新生成对话标题。",
  "This file path is invalid.": "文件路径无效。",
  "This project has no saved scripts yet": "此项目还没有配置快捷运行脚本",
  "This removes offline data for every environment. Connections, credentials, account data, and app preferences stay intact.":
    "将清除所有设备的本地离线缓存，但不会删除已保存的连接、登录凭证、账号和外观设置。",
  "This removes offline threads, server metadata, and cached branches for this environment. The saved connection and credentials stay intact.":
    "将清除该设备的离线对话记录和分支缓存，已保存的连接和登录凭证不受影响。",
  "This terminal route needs an active thread and workspace.":
    "需要先打开一条绑定了项目目录的对话才能使用终端。",
  "This thread does not have a workspace root yet, so there is nowhere to open a shell.":
    "该对话未关联本地文件夹，无法打开终端。",
  "This thread does not have an active workspace path.": "该对话没有可用的项目文件夹路径。",
  "This thread has no ready turn diffs and the worktree diff is empty.":
    "该对话目前还没有任何代码改动记录。",
  "This thread is not available in the current mobile snapshot.": "当前手机缓存中找不到这条对话。",
  "This thread is working. Interrupt it first, then try again.":
    "智能体正在运行中，请先点击停止后再试。",
  "This thread still needs attention. Resolve or interrupt it first, then try again.":
    "该对话正在等待你回复或批准，请先处理或停止后再试。",
  "Thread list options": "对话列表选项",
  "Thread settings": "对话设置",
  "Thread unavailable": "对话不可用",
  Threads: "对话",
  Totals: "总计",
  "Try again": "重试",
  "Try Again": "重试",
  Turn: "单轮回复",
  "Turn diffs and worktree changes": "单轮改动与目录全部改动",
  "type and press return": "输入内容后按回车",
  "Unable to open PR": "无法打开合并请求 (PR)",
  "Uncached input": "未命中缓存输入",
  Unpriced: "未计费模型",
  "Update failed": "更新失败",
  "Update ready": "新版本已就绪",
  "Use template": "套用模板",
  "Start a Codex thread first": "请先发起一条 Codex 对话",
  "Send a message before you submit feedback.": "请先发送至少一条消息后再提交反馈。",
  "Could not send feedback to OpenAI": "未能向 OpenAI 发送反馈",
  "Feedback sent to OpenAI": "反馈已发送给 OpenAI",
  "Sending feedback to OpenAI...": "正在向 OpenAI 发送反馈…",
  "An error occurred.": "出了点问题，请稍后重试。",
  "Copy ID": "复制编号",
  "Codex feedback thread ID": "Codex 反馈对话 ID",
  "Install Now": "立即安装",
  Later: "稍后再说",
  Delete: "删除",
  "Clear Cache": "清空缓存",
  Usage: "用量统计",
  "User input needed": "等你回答问题",
  "Un-settle": "移回待办",
  Unpin: "取消置顶",
  Version: "版本号",
  "Warning: this is the default branch.": "注意：当前是主分支。",
  Wake: "提前恢复",
  "Wake thread": "提前恢复对话",
  "What should we build": "想让智能体帮你做什么",
  "Word break": "自动换行",
  "work log": "操作过程记录",
  "Working for": "已运行",
  "Working tree": "当前目录未提交改动",
  Working: "进行中",
  "You are offline": "当前网络已断开",
  "Compact and continue": "压缩上下文并继续",
  "Don't ask again": "以后不再询问",
  "Keep full history": "保留完整对话记录",
  "Keep full history and skip future resume prompts.": "保留完整对话记录，以后不再弹出此提示。",
  "Resume session": "继续对话",
  "Resume with a summary and use fewer tokens.":
    "将早期内容浓缩为摘要后继续，大幅节省 Token 用量。",
  "Resume without changing the conversation.": "不压缩内容，原样继续对话。",
  "Cancel dictation": "取消语音输入",
  "Finish dictation": "完成语音输入",
  "All accounts are shown by connected providers.": "所有账号均已归入已连接的 AI 服务下方显示。",
  "Antigravity cannot be installed on this environment. Use a supported server host or set an executable path in provider settings.":
    "当前设备不支持自动安装 Antigravity。请更换受支持的电脑系统，或在「AI 服务」设置中手动指定程序路径。",
  "Attach the file again and retry.": "请重新添加附件后再试。",
  "Cancel install": "取消安装",
  "Cancel sign-in": "取消登录",
  "Checking credentials.": "正在验证登录凭证。",
  "Checking environment access.": "正在检查设备操作权限。",
  "Checking Google sign-in.": "正在检查 Google 登录状态。",
  "Checking the Antigravity installation.": "正在检查 Antigravity 安装状态。",
  "Close image": "关闭图片",
  "Close video": "关闭视频",
  "Complete sign-in": "完成登录",
  Connect: "连接",
  "Connect with the credentials set in provider settings on web or desktop.":
    "使用电脑端或网页版「AI 服务」设置中已配置好的登录凭证进行连接。",
  "Copy full path": "复制完整路径",
  "Copy relative path": "复制项目内相对路径",
  "Copy sign-in link": "复制登录链接",
  "Copy URL": "复制网址",
  "Could not cancel sign-in. Try again.": "未能取消登录，请重试。",
  "Could not cancel the install. Try again.": "未能取消安装，请重试。",
  "Could not change this provider. Reconnect and try again.":
    "未能修改此 AI 服务设置，请重新连接设备后重试。",
  "Could not check your environment access.": "无法检查运行设备的访问权限。",
  "Could not complete Google sign-in. Check the return URL and try again.":
    "未能完成 Google 登录，请检查粘贴的返回网址后重试。",
  "Could not copy the sign-in link.": "未能复制登录链接。",
  "Could not load this video.": "无法加载此视频。",
  "Could not load this video. Check the connection and try again.":
    "无法加载此视频，请检查网络连接后重试。",
  "Could not open Google sign-in. Copy the link and open it in your browser.":
    "无法直接打开 Google 登录页，请复制链接后到浏览器中打开。",
  "Could not open PDF": "无法打开 PDF",
  "Could not open preview": "无法打开预览",
  "Could not open video": "无法打开视频",
  "Could not remove the managed install. Try again.": "未能移除内置安装的组件，请重试。",
  "Could not share file": "无法分享文件",
  "Could not sign out of Google. Try again.": "未能退出 Google 登录，请重试。",
  "Could not start Google sign-in. Try again.": "未能启动 Google 登录，请重试。",
  "Could not start the install. Try again.": "未能开始安装，请重试。",
  "Could not use the reset credit.": "未能使用重置额度。",
  "Disable Antigravity": "停用 Antigravity",
  "Disable Antigravity?": "停用 Antigravity？",
  Disabled: "已停用",
  Disable: "停用",
  Disconnect: "断开连接",
  "Disconnect Antigravity?": "断开 Antigravity 连接？",
  Enabled: "已启用",
  "Enable Antigravity": "启用 Antigravity",
  "Enable Antigravity to sign in.": "请先启用 Antigravity 后再登录。",
  "Extracting Antigravity files.": "正在解压 Antigravity 安装文件。",
  "Google account": "Google 账号",
  "Gemini Enterprise": "Gemini 企业版",
  "Gemini API key": "Gemini API 密钥",
  "Agent Platform (Vertex AI)": "Agent Platform（Vertex AI）",
  "Google sign-in return URL": "Google 登录返回网址",
  Image: "图片",
  "Install Antigravity": "安装 Antigravity",
  "Install Antigravity to sign in.": "请先安装 Antigravity 后再登录。",
  "Install status is unavailable. Reconnect and try again.":
    "无法获取安装状态，请重新连接设备后重试。",
  Installed: "已安装",
  Loading: "正在加载",
  "Loading provider settings.": "正在加载 AI 服务设置。",
  "Loading video": "正在加载视频",
  "Loading video...": "正在加载视频…",
  "Media actions": "媒体操作",
  "No accounts reported.": "暂未检测到已登录账号。",
  "No limits reported.": "暂无额度信息。",
  "No reset credit left.": "没有剩余的重置额度了。",
  "No reset credits banked": "暂无可用重置额度",
  "Not installed": "未安装",
  ". Not installed": " · 未安装",
  "Nothing to reset right now.": "当前额度充裕，无需重置。",
  "Open Google sign-in": "打开 Google 登录页",
  "Open in file viewer": "在文件查看器中打开",
  "Opening share sheet…": "正在打开分享菜单…",
  "Opening share sheet...": "正在打开分享菜单…",
  "Please try again.": "请稍后重试。",
  "Preview unavailable": "暂无法预览",
  "Reconnect to this environment and open the video again.": "请重新连接该运行设备后再次打开视频。",
  "Reconnect to this environment and try again.": "请重新连接该运行设备后再试。",
  "Reconnect to this environment to continue setup.": "请重新连接该运行设备以继续完成配置。",
  Remove: "移除",
  "Remove managed install": "卸载内置安装的程序",
  "Remove the Antigravity install?": "确定卸载 Antigravity 吗？",
  "Reset applied. Your windows have cleared.": "额度已重置，当前周期用量已清零。",
  "Retry connection": "重新连接",
  "Retry Google sign-in": "重试 Google 登录",
  "Retry install": "重新安装",
  "Retry video": "重新加载视频",
  Retry: "重试",
  "Save or share": "保存或分享",
  "Save or share video": "保存或分享视频",
  "Sign in with Google": "使用 Google 账号登录",
  "Sign in with the Google account you use for Antigravity.":
    "请使用你开通了 Antigravity 的 Google 账号登录。",
  "Sign-in has not been checked.": "尚未检查登录状态。",
  "Sign-in is open on another client. Complete it there or wait for it to expire.":
    "另一台设备上正在进行登录，请在那边完成操作，或稍等片刻待其自动过期后再试。",
  "Sign-in status is unavailable. Reconnect and try again.":
    "无法获取登录状态，请重新连接设备后重试。",
  "Signed in. Credentials stay on this environment.": "已登录，登录凭证安全保存在这台运行设备上。",
  "Sign out": "退出登录",
  "Sign out of Google": "退出 Google 账号",
  "Sign out of Google?": "确定退出 Google 账号吗？",
  "Starting Google sign-in.": "正在打开 Google 登录…",
  "That credit was already redeemed.": "该重置额度已经使用过了。",
  "The file could not be loaded. It may have been moved or deleted.":
    "无法打开该文件，可能已被移动或删除。",
  "The file could not be loaded. Please try again.": "无法打开该文件，请重试。",
  "The file could not be loaded. Reconnect and try again.":
    "无法打开该文件，请重新连接设备后重试。",
  "The local attachment file is missing.": "找不到本地附件文件。",
  "The rest of this setup can be completed from web or desktop.":
    "剩余配置步骤请在电脑端或网页版中完成。",
  "This account has no subscription limits.": "该账号不受订阅额度限制。",
  "This attachment is no longer available. Attach the file again.":
    "该附件已失效，请重新添加文件。",
  "This connection cannot manage providers. Pair again with permission to operate this environment.":
    "当前连接没有管理 AI 服务的权限。请重新扫码配对，并勾选操作这台设备的权限。",
  "This file may be missing, unsupported, or unavailable on this environment.":
    "该文件可能已丢失、格式暂不支持，或在这台设备上无法访问。",
  "This provider is not available on this environment.": "这台运行设备上暂未启用该 AI 服务。",
  "This provider link is not valid.": "该 AI 服务链接无效。",
  "This video couldn't be loaded or played. Check the connection, or touch and hold the video to save or share the original.":
    "无法加载或播放此视频。请检查网络连接，或长按视频保存原文件后用其他应用打开。",
  "Touch and hold for media actions": "长按可保存或分享",
  "Try again.": "请重试。",
  "Upload failed. Tap to retry.": "上传失败，点击重试。",
  "Use a reset credit": "使用重置额度",
  "Use a reset credit?": "使用一次重置额度？",
  "Use credit": "确认使用",
  "Using credit…": "正在重置额度…",
  "Use reset": "重置额度",
  "Usage limits": "订阅额度",
  "Dismiss usage limits": "关闭订阅额度提示",
  "Dismiss feedback notice": "关闭反馈提示",
  "Dismiss without answering": "暂不回答并关闭",
  "Ahead of pace": "消耗偏快",
  "On pace": "进度适中",
  "Under pace": "余量充裕",
  left: "剩余",
  now: "现在",
  "Show account details": "查看账号详情",
  "Select an environment to see limits.": "选择一台运行设备以查看订阅额度。",
  "No provider on the selected environments reports subscription limits.":
    "所选设备上的 AI 服务暂不提供订阅额度查询。",
  "Hide account email": "隐藏账号邮箱",
  "Reveal account email": "显示账号邮箱",
  "This account is no longer reporting limits on the selected environments.":
    "所选设备上已无法获取该账号的额度信息。",
  Resets: "重置时间",
  Restores: "可恢复",
  "Signed in": "已登录于",
  "Reset credits": "重置额度券",
  "Raw token cost": "按量折算费用",
  "* if billed at full API rate": "* 按官方 API 原价折算估算",
  "Past 24 hours": "最近 24 小时",
  "Past 7 days": "最近 7 天",
  "Past 30 days": "最近 30 天",
  "Past 90 days": "最近 90 天",
  Cost: "折算费用",
  Tokens: "Token",
  Environments: "运行设备",
  "Filter usage environments": "筛选统计设备",
  "Filter usage environments, some environments are loading": "筛选统计设备（部分设备加载中）",
  "Select an environment to see usage.": "选择一台运行设备以查看用量统计。",
  "Older server · excluded from usage totals": "设备端版本较旧 · 未计入总用量",
  "Disconnected · showing saved usage": "连接已断开 · 显示上次保存的用量",
  "Waiting for connection…": "正在等待连接…",
  "Usage unavailable · showing saved totals": "暂无法刷新用量 · 显示上次保存的汇总",
  "Usage unavailable": "暂无法获取用量",
  "Updating usage…": "正在刷新用量…",
  "Loading usage…": "正在加载用量…",
  "Usage up to date": "用量已是最新",
  "Cache read": "缓存读取",
  "Cache write": "缓存写入",
  "of records, excluded from cost": "条记录暂无官方定价，未计入费用",
  "Video unavailable": "视频不可用",
  "Waiting for the environment.": "正在等待运行设备响应。",
  "Complete sign-in in your browser.": "请在浏览器中完成登录。",
  "After sign-in, the browser will open a 127.0.0.1 address that cannot load on your phone. Copy that full address and paste it here.":
    "登录成功后，浏览器会跳转到一个以 127.0.0.1 开头的网址（手机上显示无法打开属于正常现象）。请直接复制浏览器地址栏里的完整网址，粘贴到下方即可。",
  "This redeems one credit on your account and clears the current rate-limit windows. It cannot be undone.":
    "将消耗你账号中的 1 次重置额度，立即清零当前周期的用量限制。使用后无法退回。",
  "Attachment still uploading": "附件正在上传中",
  "Retry or remove the failed attachment": "请重试或移除上传失败的附件",
  Worktree: "独立目录",
  "Switching branch...": "正在切换分支…",
  "The branch could not be checked out.": "无法切换到该分支。",
  "The task could not be saved to the outbox.": "无法将对话保存到待发送队列。",
  "Your prompt was kept in the project draft.": "你输入的内容已自动保存在项目草稿中。",
  "Edit task": "编辑对话内容",
  "Setting up worktree…": "正在准备独立目录…",
  "Starting…": "正在启动…",
  "Starting the task…": "正在发起对话…",
  "New thread on branch": "在此分支新建对话",
} as const satisfies Readonly<Record<string, string>>;

function translateDynamicMessage(value: string): string | null {
  const createPrivateRepository = /^Create private repository on (.+)$/.exec(value);
  if (createPrivateRepository) return `在 ${createPrivateRepository[1]} 上创建私有仓库`;
  const createRepositoryFailure = /^Could not create the (.+) repository$/.exec(value);
  if (createRepositoryFailure) return `无法创建 ${createRepositoryFailure[1]} 仓库`;

  const updatingProviders = /^Updating (\d+) providers…$/.exec(value);
  if (updatingProviders) return `正在更新 ${updatingProviders[1]} 个 AI 服务…`;
  const updatingEnvironments = /^Updating (\d+) environments…$/.exec(value);
  if (updatingEnvironments) return `正在更新 ${updatingEnvironments[1]} 台运行设备…`;
  const updatingSource = /^Updating (.+)…$/.exec(value);
  if (updatingSource) return `正在更新 ${updatingSource[1]}…`;
  const savedUsageTotals = /^(.+) Showing saved totals\.$/.exec(value);
  if (savedUsageTotals)
    return `${localizeMobileString(savedUsageTotals[1]!, "zh-CN")} 正在显示上次保存的汇总。`;

  const environmentLabel = /^Environment: (.+)$/.exec(value);
  if (environmentLabel) return `运行设备：${environmentLabel[1]}`;
  const onMachine = /^on (.+)$/.exec(value);
  if (onMachine) return `位于 ${onMachine[1]}`;

  const enableCursor = /^Enable Cursor usage from (.+)$/.exec(value);
  if (enableCursor) return `开启 ${enableCursor[1]} 的 Cursor 用量统计`;
  const enableOn = /^Enable on (.+)$/.exec(value);
  if (enableOn) return `在 ${enableOn[1]} 上开启`;
  const chatGptAccount = /^(.+)\. Open ChatGPT with the account you connected\.$/.exec(value);
  if (chatGptAccount) return `${chatGptAccount[1]}。请用你已关联的账号打开 ChatGPT。`;
  const unknownRates = /^no known rates · (.+) tokens$/.exec(value);
  if (unknownRates) return `暂无定价 · ${unknownRates[1]} Token`;

  const percentUsed = /^(\d+)% used$/.exec(value);
  if (percentUsed) return `已用 ${percentUsed[1]}%`;

  const percentLeft = /^(\d+)% left$/.exec(value);
  if (percentLeft) return `剩余 ${percentLeft[1]}%`;

  const sessions = /^Across (.+) sessions$/.exec(value);
  if (sessions) return `累计 ${sessions[1]} 次对话`;

  const share = /^(.+) of (cost|tokens) · (.+?)(?: tokens)?$/.exec(value);
  if (share)
    return `占总${share[2] === "cost" ? "费用" : " Token"} ${share[1]} · ${share[3]} Token`;

  const periodAverage = /^(.+) per active (hour|day)$/.exec(value);
  if (periodAverage)
    return `每个活跃${periodAverage[2] === "hour" ? "小时" : "天"}平均 ${periodAverage[1]}`;

  const rawCost = /^(.+)x the raw cost$/.exec(value);
  if (rawCost) return `相当于按量原价的 ${rawCost[1]} 倍`;

  const observedInput = /^(.+) of observed input$/.exec(value);
  if (observedInput) return `占输入总量的 ${observedInput[1]}`;

  const cacheWrites = /^(.+) cache writes$/.exec(value);
  if (cacheWrites) return `缓存写入 ${cacheWrites[1]} Token`;

  const reasoning = /^incl\. (.+) reasoning$/.exec(value);
  if (reasoning) return `含思考消耗 ${reasoning[1]} Token`;

  const restoresPool = /^Restores (\d+)% of the pool$/.exec(value);
  if (restoresPool) return `可恢复总额度的 ${restoresPool[1]}%`;

  const resetAt = /^Resets (.+)$/.exec(value);
  if (resetAt) return `重置时间：${resetAt[1]}`;

  const refreshLimits = /^(.+) could not refresh limits\. Showing the last known values\.$/.exec(
    value,
  );
  if (refreshLimits) return `${refreshLimits[1]} 暂无法刷新额度，当前显示上次记录的数据。`;

  const segment = /^Segment (\d+), (.+), (\d+)% left(.*)$/.exec(value);
  if (segment) {
    const timeLeft = /^, ([\d.]+)% of the window left$/.exec(segment[4] ?? "");
    const suffix = timeLeft ? `，本周期时间剩余 ${timeLeft[1]}%` : segment[4];
    return `第 ${segment[1]} 段，${segment[2]}，额度剩余 ${segment[3]}%${suffix}`;
  }

  const duplicateUsage =
    /^Counted once across environments sharing a transcript directory: (.+)$/.exec(value);
  if (duplicateUsage) return `共用同一记录目录的设备仅统计一次：${duplicateUsage[1]}`;

  const playMedia = /^Play (.+)$/.exec(value);
  if (playMedia) return `播放 ${playMedia[1]}`;

  const providerSetup = /^(Set up|Manage) (.+)$/.exec(value);
  if (providerSetup) {
    return providerSetup[1] === "Set up" ? `配置 ${providerSetup[2]}` : `管理 ${providerSetup[2]}`;
  }

  const localizeDuration = (duration: string) =>
    duration
      .replace(/(\d+)d/g, "$1 天")
      .replace(/(\d+)h/g, "$1 小时")
      .replace(/(\d+)m/g, "$1 分钟");

  if (value === "resets now") return "即将重置";
  const inDuration = /^in (.+)$/.exec(value);
  if (inDuration) return `${localizeDuration(inDuration[1]!)}后`;
  const resetsIn = /^resets in (.+)$/.exec(value);
  if (resetsIn) return `${localizeDuration(resetsIn[1]!)}后重置`;

  const pace = /^(ahead of pace|on pace|under pace)(?: · (resets now|resets in .+))?$/.exec(value);
  if (pace) {
    const paceLabel =
      pace[1] === "ahead of pace" ? "消耗偏快" : pace[1] === "under pace" ? "余量充裕" : "进度适中";
    const resetLabel = pace[2] ? translateDynamicMessage(pace[2]) : null;
    return resetLabel ? `${paceLabel} · ${resetLabel}` : paceLabel;
  }

  const resetCredits = /^(\d+) reset credits? banked(?: · next expires in (.+))?$/.exec(value);
  if (resetCredits) {
    const expiry = resetCredits[2] ? ` · 下张将在 ${localizeDuration(resetCredits[2])}后过期` : "";
    return `可用重置额度 ${resetCredits[1]} 次${expiry}`;
  }

  const limitsEnvironment = /^Limits · (.+)$/.exec(value);
  if (limitsEnvironment) return `额度 · ${limitsEnvironment[1]}`;

  const branchSelection = /^(Base branch|Branch): (.+)$/.exec(value);
  if (branchSelection)
    return `${branchSelection[1] === "Base branch" ? "基础分支" : "分支"}：${branchSelection[2]}`;

  const switchesWorkspace = /^Switches to (a new worktree|the current checkout)$/.exec(value);
  if (switchesWorkspace)
    return switchesWorkspace[1] === "a new worktree"
      ? "切换到新建的独立目录"
      : "切换到当前本地项目目录";

  const newThreadOnBranch = /^New thread on (.+)$/.exec(value);
  if (newThreadOnBranch) return `在 ${newThreadOnBranch[1]} 分支新建对话`;

  const installState = /^(Enabled|Disabled)\. (Installed)(?: (.+))?$/.exec(value);
  if (installState) {
    const enabled = installState[1] === "Enabled" ? "已启用" : "已停用";
    return `${enabled} · 已安装${installState[3] ? ` ${installState[3]}` : ""}`;
  }
  const notInstalledState = /^(Enabled|Disabled)\. Not installed$/.exec(value);
  if (notInstalledState) {
    return `${notInstalledState[1] === "Enabled" ? "已启用" : "已停用"} · 未安装`;
  }

  const downloading = /^Downloading (\d+)(?: of (\d+))? MB$/.exec(value);
  if (downloading) {
    return downloading[2]
      ? `正在下载 ${downloading[1]} / ${downloading[2]} MB`
      : `正在下载 ${downloading[1]} MB`;
  }

  const signInExpiry = /^Sign-in expires at (.+)\.$/.exec(value);
  if (signInExpiry) return `登录链接将于 ${signInExpiry[1]} 过期。`;

  const disableProvider =
    /^This stops Antigravity sessions on (.+)\. Google credentials stay saved\.$/.exec(value);
  if (disableProvider)
    return `将停止 ${disableProvider[1]} 上正在运行的 Antigravity 对话，已登录的 Google 账号会继续保留。`;

  const removeManagedInstall =
    /^This removes T3's managed install from (.+)\. Providers that use it will need it installed again\. Google credentials and threads stay\.$/.exec(
      value,
    );
  if (removeManagedInstall) {
    return `将从 ${removeManagedInstall[1]} 卸载 T3 内置安装的程序。使用它的 AI 服务需重新安装后才能运行；Google 登录凭证和历史对话都会保留。`;
  }

  const disconnectProvider =
    /^This stops Antigravity sessions for (.+) on (.+)\. Threads and files stay\.$/.exec(value);
  if (disconnectProvider) {
    return `将停止 ${disconnectProvider[2]} 上 ${disconnectProvider[1]} 的 Antigravity 对话，历史对话和本地文件都会保留。`;
  }

  const recording = /^Recording (\d+:\d{2})$/.exec(value);
  if (recording) return `正在录音 ${recording[1]}`;

  const working = /^Working for (.+)$/.exec(value);
  if (working) return `已运行 ${working[1]}`;

  const useTemplate = /^Use (.+) template$/.exec(value);
  if (useTemplate) return `套用“${useTemplate[1]}”模板`;

  const interactionMode = /^Interaction mode: (Plan|Build)$/.exec(value);
  if (interactionMode)
    return `协作模式：${interactionMode[1] === "Plan" ? "先出方案" : "直接执行"}`;

  const switchMode = /^Switches to (Plan|Build) mode$/.exec(value);
  if (switchMode) return `切换为“${switchMode[1] === "Plan" ? "先出方案" : "直接执行"}”模式`;

  const claudeResumeQuestion =
    /^This session is (?:(\d+)h (\d+)m|(\d+)m) old and uses (\d{1,3}(?:,\d{3})*) tokens\. Compact it before continuing\?$/.exec(
      value,
    );
  if (claudeResumeQuestion) {
    const age = claudeResumeQuestion[3]
      ? `${claudeResumeQuestion[3]} 分钟`
      : `${claudeResumeQuestion[1]} 小时 ${claudeResumeQuestion[2]} 分钟`;
    return `这条对话距今已有 ${age}，累计占用了 ${claudeResumeQuestion[4]} Token。要先压缩早期上下文再继续吗？`;
  }

  const noThreads = /^No threads matching "(.+)"\.$/.exec(value);
  if (noThreads) return `没有找到包含“${noThreads[1]}”的对话。`;

  const showMore = /^Show more \((\d+) settled hidden\)$/.exec(value);
  if (showMore) return `展开更多（已折叠 ${showMore[1]} 条已办结对话）`;

  const queuedMessages = /^(\d+) queued messages? will send automatically\.$/.exec(value);
  if (queuedMessages) return `${queuedMessages[1]} 条待发消息将在恢复连接后自动发出。`;

  const questionCount = /^(\d+) questions?$/.exec(value);
  if (questionCount) return `${questionCount[1]} 个待答问题`;

  const selectedCommitFiles = /^(\d+) of (\d+) selected · \+([\d.,kKmMbB]+) −([\d.,kKmMbB]+)$/.exec(
    value,
  );
  if (selectedCommitFiles)
    return `已勾选 ${selectedCommitFiles[1]} / ${selectedCommitFiles[2]} 个文件 · +${selectedCommitFiles[3]} −${selectedCommitFiles[4]}`;

  const selectedFiles = /^(\d+) selected · \+(\d+) −(\d+)$/.exec(value);
  if (selectedFiles)
    return `已勾选 ${selectedFiles[1]} 个 · +${selectedFiles[2]} −${selectedFiles[3]}`;

  const feedbackThreadId = /^Thread ID: (.+)$/.exec(value);
  if (feedbackThreadId) return `对话编号：${feedbackThreadId[1]}`;

  const feedbackSent = /^Feedback sent to OpenAI\.\n\nThread ID: `(.+)`$/.exec(value);
  if (feedbackSent) return `反馈已发送给 OpenAI。\n\n对话编号：\`${feedbackSent[1]}\``;

  const feedbackFailed = /^Could not send feedback to OpenAI\.\n\n([\s\S]+)$/.exec(value);
  if (feedbackFailed) return `未能向 OpenAI 发送反馈。\n\n${feedbackFailed[1]}`;

  return null;
}

export function localizeMobileString(value: string, locale: MobileLocale = MOBILE_LOCALE): string {
  if (locale !== "zh-CN") return value;

  const leadingWhitespace = value.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = value.match(/\s*$/)?.[0] ?? "";
  const source = value.trim();
  if (!source) return value;

  const translated =
    (ZH_CN_MESSAGES as Readonly<Record<string, string>>)[source] ?? translateDynamicMessage(source);
  return translated === undefined || translated === null
    ? value
    : `${leadingWhitespace}${translated}${trailingWhitespace}`;
}

export function localizeAlertArguments(
  title: string,
  message?: string,
  buttons?: AlertButton[],
  locale: MobileLocale = MOBILE_LOCALE,
): {
  readonly title: string;
  readonly message?: string;
  readonly buttons?: AlertButton[];
} {
  return {
    title: localizeMobileString(title, locale),
    message: message === undefined ? undefined : localizeMobileString(message, locale),
    buttons: buttons?.map((button) => ({
      ...button,
      text: button.text === undefined ? undefined : localizeMobileString(button.text, locale),
    })),
  };
}

export type LocalizedAlertApi = {
  prompt: typeof import("react-native").Alert.prompt;
  alert(title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions): void;
};
