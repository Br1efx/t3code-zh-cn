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
  "Provider accounts": "供应商账号",
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
  "Add provider": "添加供应商",
  "Custom provider": "自定义供应商",
  "Add an environment before creating a task.": "请先连接一台运行设备，再新建对话。",
  "Add an environment to load projects and start coding sessions.":
    "连接你的电脑或服务器后，即可加载项目并开始对话。",
  "All environments": "所有运行设备",
  "All projects": "所有项目",
  "All providers": "全部供应商",
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
  "Could not load T3 Connect environments": "未能加载 T3 Connect 设备",
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
    "由 T3 Connect 自动维护连接地址，无需手动修改。",
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
  Provider: "供应商",
  Providers: "供应商",
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
  "Scanning provider transcripts…": "正在统计各供应商历史用量…",
  "Scroll to end": "跳到底部",
  Search: "搜索",
  "Search archived threads": "搜索已归档对话",
  "Search files": "搜索文件",
  "Search threads": "搜索对话",
  "Select a diff line or range first.": "请先点击选择一行或几行改动代码。",
  "Select a thread": "选择一条对话",
  "Select diff": "选择对比范围",
  "Select review diff": "选择要查看的改动范围",
  "Set up T3 Connect": "设置 T3 Connect",
  Settle: "归入已办",
  Settings: "设置",
  "Shared content unavailable": "分享的内容已失效",
  "Show keyboard": "弹出键盘",
  "Show legacy models": "显示旧版模型",
  "Show threads from every environment": "显示所有设备上的对话",
  "Show threads from every project": "显示所有项目的对话",
  "Sign in to T3 Connect": "登录 T3 Connect",
  "Sign in to your T3 account to set up T3 Connect.": "登录你的 T3 账号即可使用 T3 Connect。",
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
  "All accounts are shown by connected providers.": "所有账号均已归入已连接的供应商下方显示。",
  "Antigravity cannot be installed on this environment. Use a supported server host or set an executable path in provider settings.":
    "当前设备不支持自动安装 Antigravity。请更换受支持的电脑系统，或在「供应商」设置中手动指定程序路径。",
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
    "使用电脑端或网页版「供应商」设置中已配置好的登录凭证进行连接。",
  "Copy full path": "复制完整路径",
  "Copy relative path": "复制项目内相对路径",
  "Copy sign-in link": "复制登录链接",
  "Copy URL": "复制网址",
  "Could not cancel sign-in. Try again.": "未能取消登录，请重试。",
  "Could not cancel the install. Try again.": "未能取消安装，请重试。",
  "Could not change this provider. Reconnect and try again.":
    "未能修改此供应商设置，请重新连接设备后重试。",
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
  "Loading provider settings.": "正在加载供应商设置。",
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
    "当前连接没有管理供应商的权限。请重新扫码配对，并勾选操作这台设备的权限。",
  "This file may be missing, unsupported, or unavailable on this environment.":
    "该文件可能已丢失、格式暂不支持，或在这台设备上无法访问。",
  "This provider is not available on this environment.": "这台运行设备上暂未启用该供应商。",
  "This provider link is not valid.": "该供应商链接无效。",
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
    "所选设备上的供应商暂不提供订阅额度查询。",
  "Hide account email": "隐藏账号邮箱",
  "Reveal account email": "显示账号邮箱",
  "This account is no longer reporting limits on the selected environments.":
    "所选设备上已无法获取该账号的额度信息。",
  Resets: "重置时间",
  Restores: "可恢复",
  "Signed in": "已登录",
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

  // T3 Connect, connection management, device approval, notifications, routes & link requests
  "Link date unavailable": "关联日期未知",
  "Managed tunnel": "托管隧道",
  "Activity publishing only": "仅发布状态动态",
  "Deregister server?": "解除绑定此设备？",
  "Could not deregister the server.": "未能解除绑定该设备。",
  "Could not deregister server": "未能解除绑定设备",
  OK: "好",
  "Link a server from its local Settings to reach it through T3 Connect.":
    "在该设备的本地「设置」中将其关联到当前账号，即可通过 T3 Connect 远程访问。",
  "Don't show this again": "不再显示",
  "Available · Relay online": "可用 · 中转在线",
  "Relay is offline.": "中转服务当前离线。",
  "Available · Checking relay status...": "可用 · 正在检查中转状态…",
  "Available · Relay status unknown": "可用 · 中转状态未知",
  URL: "连接地址",
  "My MacBook": "我的 MacBook",
  "The environment could not be updated.": "未能更新该运行设备。",
  "No environments connected yet.\nTap": "尚未连接任何运行设备。\n点击",
  "to add one.": "即可添加。",
  "Trace ID:": "调用链编号：",
  "Long press to copy the trace ID": "长按可复制调用链编号",
  "Copies the trace ID": "点按复制调用链编号",
  "Long press to remove from this device": "长按可从此设备移除",
  "For machines on your local network or tailnet. The machine keeps its own provider credentials.":
    "适用于同一局域网或 Tailscale 网络中的电脑，供应商登录凭证仍仅保留在目标电脑上。",
  "Close environments": "关闭运行设备",
  "Refresh cloud environments": "刷新云端设备",
  "Scanned QR code did not contain a pairing URL.": "扫描的二维码中未包含配对链接。",
  "Scanned QR code was not recognized.": "无法识别扫描的二维码。",
  "Open T3 Account": "打开 T3 账号",
  "Remove from this device?": "要从此设备移除吗？",
  "Failed to pair with the environment.": "与该运行设备配对失败。",
  "It stays on your T3 Connect account and keeps its host space. Deregister it under T3 Account → T3 Connect to free it.":
    "该设备仍会保留在你的 T3 Connect 账号中并占用一个设备名额。如需释放名额，请前往「T3 账号 → T3 Connect」解除绑定。",
  "It's no longer on your T3 Connect account.": "该设备已不在你的 T3 Connect 账号中。",
  "This doesn't change your T3 Connect account. To deregister it there, use T3 Account → T3 Connect.":
    "此操作不会影响你的 T3 Connect 账号。如需在账号中解绑，请前往「T3 账号 → T3 Connect」。",
  "Request no longer waiting": "请求已失效",
  "It expired or was answered elsewhere.": "该请求已过期，或已在其他设备上处理。",
  "The request is still waiting. Try again.": "该请求仍在等待处理，请重试。",
  Deny: "拒绝",
  Approve: "批准",
  "Could not deny the device": "未能拒绝该设备",
  "Could not approve the device": "未能批准该设备",
  "A new device": "一台新设备",
  "Approve this device?": "批准此设备连接？",
  "Agent activity": "智能体动态",
  "Agent Live Updates": "智能体实时动态更新",
  "Ongoing Agent Activity": "进行中的智能体动态",
  "Turn off Live Activity preference": "关闭锁屏实时动态偏好",
  "Live Update Settings": "实时动态设置",
  "Unavailable on this platform": "此平台暂不支持",
  "Notifications require T3 Connect in this app build.":
    "当前应用版本需要启用 T3 Connect 才能使用通知功能。",
  "Install a newer app build to enable notifications": "请安装较新的应用版本以启用通知功能",
  "Could not request notification permission.": "未能请求通知权限。",
  "Couldn't finish enabling notifications": "未能完成开启通知",
  "Notification access was granted, but this device could not be registered with T3 Connect. Notifications will start once registration succeeds.":
    "已授予通知权限，但此设备暂未注册到 T3 Connect。待注册成功后将自动开始接收通知。",
  "Agent notifications are unavailable on this platform.": "此平台暂不支持智能体通知。",
  "Live Activity updates require T3 Connect so relay can deliver updates to this device.":
    "实时动态更新需要登录 T3 Connect，以便中转服务向本机推送动态。",
  "Ongoing activity unavailable": "进行中动态不可用",
  "Could not enable agent notifications.": "未能开启智能体通知。",
  "Notification permission needed": "需要通知权限",
  "Enable notifications in system Settings to show ongoing agent activity.":
    "请在系统设置中开启通知权限，以显示进行中的智能体动态。",
  "Live Activities unavailable": "锁屏实时动态不可用",
  "Could not enable agent activity updates.": "未能开启智能体动态更新。",
  "Ongoing activity enabled": "已开启进行中动态",
  "Live Activities enabled": "已开启锁屏实时动态",
  "Agent activity updates are enabled for environments this connection can configure.":
    "已为当前连接有权限配置的运行设备开启智能体动态更新。",
  "Agent activity updates are enabled. Add an environment to start receiving updates.":
    "已开启智能体动态更新。添加运行设备后即可开始接收动态。",
  "Couldn't finish enabling activity updates": "未能完成开启动态更新",
  "This device could not be registered with T3 Connect, so activity updates won't appear yet. They'll start once registration succeeds.":
    "此设备暂未能注册到 T3 Connect，暂时无法显示动态更新。待注册成功后将自动开始。",
  "Open system Settings to disable notifications for T3 Code.":
    "请前往系统设置关闭 T3 Code 的通知权限。",
  "Open Settings": "打开系统设置",
  "Couldn't open Settings": "无法打开系统设置",
  "Open Android Settings, select T3 Code, then enable Live Updates in Notifications.":
    "请打开 Android 系统设置，选择 T3 Code，然后在“通知”中开启实时更新。",
  Connection: "连接状态",
  "This environment is no longer saved on this device.": "此设备已不再保存于本机。",
  "Connect this environment to manage it.": "连接该运行设备后即可进行管理。",
  "This connection does not have permission to manage the environment.":
    "当前连接没有管理该运行设备的权限。",
  "The action could not be completed. Try again.": "无法完成该操作，请重试。",
  "You are up to date.": "已是最新版本。",
  "Update the desktop app on this machine.": "请在此设备上更新桌面端应用。",
  "Update and restart T3 Code on this machine.": "请在此设备上更新并重启 T3 Code。",
  "Refresh providers": "刷新供应商",
  "Provider status refreshed.": "供应商状态已刷新。",
  "Version unknown": "版本未知",
  "Update this provider on the environment's machine.": "请在此运行设备上更新该供应商。",
  Routes: "连接路由",
  "Your permissions": "当前连接权限",
  "Add route": "添加路由",
  "In use": "当前使用",
  "Found automatically": "自动发现",
  "Applies to the route marked In use. Other routes may have different permissions and have not been checked.":
    "以下显示标记为“当前使用”的路由所持有的权限。其他路由的权限可能不同，当前未作检查。",
  Allowed: "已授权",
  "Not granted": "未授权",
  "View environment": "查看运行设备",
  "Operate tasks": "发起与控制对话",
  "Change environment settings": "修改设备设置",
  "Manage providers": "管理供应商",
  "Maintain environment": "维护运行设备",
  "Control previews": "控制预览画面",
  "View diagnostics and usage": "查看诊断与用量",
  "View terminals": "查看终端",
  "Use terminals": "使用终端",
  "Change source control": "修改代码版本控制",
  "Read files": "读取文件",
  "Write files": "写入文件",
  "View access": "查看访问权限",
  "Manage access": "管理访问权限",
  "View relay": "查看中转连接",
  "Manage relay": "管理中转连接",
  "Connect to this environment to view this session’s permissions.":
    "连接到该运行设备后即可查看当前会话的权限。",
  "This environment did not accept your session. Reconnect to try again.":
    "该运行设备未接受当前会话，请重新连接后再试。",
  "Could not verify your permissions. Retrying automatically.":
    "暂时无法验证你的权限，正在自动重试。",
  "Checking permissions…": "正在检查权限…",
  "Pull request routing": "合并请求跨设备路由",
  "Keep source control requests on this environment.": "仅在当前运行设备处理代码托管平台请求。",
  "Share PR data with other enabled environments.": "与其他已启用的运行设备共享合并请求数据。",
  "Actions may use broader source control permissions than the original environment.":
    "执行操作时可能会使用比原设备更广泛的源代码控制权限。",
  "Could not save pull request routing permission": "未能保存合并请求路由权限",
  "Try again before leaving this screen.": "请在离开此页面前重试。",
  "Choose environments you trust to share PR data and use each other's source control access. Enable both environments. This applies only to this client.":
    "选择你信任的运行设备以共享合并请求数据并使用彼此的代码托管平台权限。需同时在两端设备上开启，此设置仅对当前客户端生效。",
  "Expired. Link it again with a new pairing code.": "已过期，请使用新的配对码重新关联。",
  "Not answering right now.": "暂时无响应。",
  Reachable: "可连通",
  "Update required": "需要更新",
  "Restarting and reconnecting…": "正在重启并重新连接…",
  "Installing update…": "正在安装更新…",
  "Downloading update…": "正在下载更新…",
  "No newer version is available yet.": "暂未检测到更新版本。",
  "This app needs a newer version of T3 Code on this machine.":
    "此客户端需要该设备上运行更新版本的 T3 Code。",
  "Check for updates": "检查更新",
  "Retry update": "重试更新",
  Update: "更新",
  "Select a connected environment.": "请选择一台已连接的运行设备。",
  "Limited permissions": "权限受限",
  "Configure a provider with in-app sign-in in web or desktop Settings.":
    "请在电脑端或网页版「设置」中配置支持应用内登录的供应商。",
  "Could not update provider sign-in.": "未能更新供应商登录状态。",
  "Turned off": "已停用",
  "Discovering sign-in methods…": "正在检测登录方式…",
  "No in-app sign-in advertised. Follow the provider's docs to finish setup.":
    "该供应商未提供应用内登录方式，请参照供应商文档完成配置。",
  "Connect to load models": "连接后加载模型",
  "Not signed in": "未登录",
  "Remove incomplete connection": "移除未完成的连接",
  "Sign out?": "确定退出登录吗？",
  "Change account": "切换账号",
  "Sign in with": "选择登录方式",
  "Could not open the provider docs.": "无法打开供应商文档。",
  "Send response": "发送回复",
  "Terminal response": "终端回复",
  "Final localhost URL": "最终本地回调网址",
  "Open sign-in page": "打开登录页",
  "Could not open the sign-in page.": "无法打开登录页。",
  "Hides the account email": "隐藏账号邮箱",
  "Reveals the account email": "显示账号邮箱",
  "Read only": "只读",
  "Read projects and threads. Cannot start, message or change anything.":
    "仅可查看项目与对话，无法发起任务、发送消息或做任何更改。",
  "Supported providers approve routine actions; others still ask.":
    "支持的供应商会自动批准常规操作，其他供应商仍会询问。",
  "Ask before commands and file changes.": "执行命令或修改文件前先征求你的同意。",
  "Auto-approve edits, ask before other actions.": "自动批准文件修改，其他操作仍会先询问。",
  "Allow commands and edits without prompts.": "无需确认即可执行命令与修改文件。",
  "Link a machine to this environment": "将一台电脑关联到此运行设备",
  "Choose machine…": "选择设备…",
  "Review link…": "查看关联请求…",
  "Only a session that manages access here can answer this.":
    "只有拥有当前设备访问管理权限的会话才能处理此请求。",
  "Link a machine": "关联设备",
  "Agents here can then launch, message and wait on threads there. It appears under Authorized clients in that machine's Sharing & access, where it can be revoked.":
    "关联后，这里的智能体即可在目标设备上启动、对话并等待任务完成。该关联会显示在目标设备的「共享与访问权限 → 已授权客户端」中，并可随时撤销。",
  "Check this address": "请核对此地址",
  "This app cannot confirm it is one of your machines. The pairing code you paste is sent there.":
    "本应用无法确认该地址是否属于你的设备。你粘贴的配对码将会发送到此地址。",
  Machine: "目标设备",
  "Another address…": "其他地址…",
  "Link a machine this app does not know, by its https or Tailscale address.":
    "通过 https 或 Tailscale 地址关联本应用尚未记录的设备。",
  "Paste the code": "粘贴配对码",
  "What agents here may do there": "允许这里的智能体在目标设备上执行哪些操作",
  "An agent here never gets more there than its own mode here either. Threads it starts there cannot change that environment's own threads, projects or settings.":
    "智能体在目标设备上获得的权限绝不会超过其在本设备的权限模式，且它在那里发起的对话无法修改目标设备自身的对话、项目或设置。",
  "Linking…": "正在关联…",
  "Use this link": "使用此关联",
  Linked: "已关联",
  "Waiting for an answer in the original thread": "正在原对话中等待回复",
  Declined: "已拒绝",
  "the other environment refused": "目标运行设备拒绝了请求",
  "Request ended": "请求已结束",
  "Could not answer the request. Try again.": "无法响应此请求，请重试。",
  "Use compatible versions of the app and server to connect.":
    "请使用版本兼容的应用与服务端进行连接。",
  "Checking terminal access": "正在检查终端权限",
  "Waiting for this connection's permissions.": "正在等待获取当前连接的权限信息。",
  "This device": "当前设备",
  " · Failed": " · 失败",
  " · Not checked": " · 未检查",
  Cause: "原因",
  "HTTP status": "HTTP 状态码",
  Attempts: "尝试次数",
  "Next retry": "下次重试",
  Route: "连接路由",
  "App version": "应用版本",
  "Host version": "服务端版本",
  "Trace ID": "调用链编号",
  Direct: "直连",
  "This device is offline": "当前设备处于离线状态",
  "This device is still loading its T3 Connect sign-in": "当前设备仍在加载 T3 Connect 登录状态",
  "This device's clock is off": "当前设备系统时间存在偏差",
  "T3 Connect returned an error": "T3 Connect 返回了错误",
  "This device could not prepare the connection": "当前设备无法准备连接",
  "T3 Connect did not accept this device's sign-in": "T3 Connect 未接受当前设备的登录凭证",
  "This device can't reach T3 Connect": "当前设备无法连接到 T3 Connect",
  "Connect this device to the internet. T3 Code reconnects on its own.":
    "请将当前设备接入互联网，T3 Code 将自动重新连接。",
  "Wait a moment. T3 Code retries on its own.": "请稍候，T3 Code 正在自动重试。",
  "If it keeps waiting, reload or restart T3 Code on this device.":
    "如果长时间停留在等待状态，请在当前设备上重新加载或重启 T3 Code。",
  "Check that this device is signed in to the same T3 Connect account as the host.":
    "请确认当前设备登录的是与目标设备相同的 T3 Connect 账号。",
  "Wait a minute. T3 Code retries on its own.": "请稍等片刻，T3 Code 将自动重试。",
  "Wait a few minutes. T3 Code retries on its own.": "请稍等几分钟，T3 Code 将自动重试。",
  "If it keeps failing, copy the diagnostics and report it.":
    "如果问题持续出现，请复制诊断信息并提交反馈。",
  "Restart T3 Code on this device.": "请在当前设备上重启 T3 Code。",
  "Sign out of T3 Connect and sign in again.": "请退出 T3 Connect 后重新登录。",
  "Check this device's internet connection.": "请检查当前设备的网络连接。",
  "A VPN, firewall, or ad blocker on this device can block T3 Connect.":
    "当前设备上的 VPN、防火墙或广告拦截工具可能会拦截 T3 Connect。",
  "A VPN, firewall, or DNS filter on this device can block the tunnel.":
    "当前设备上的 VPN、防火墙或 DNS 过滤工具可能会拦截连接隧道。",
  "Try another network, or add a direct route such as a Tailscale address.":
    "请尝试切换其他网络，或添加 Tailscale 地址等直连路由。",
  "Retry. If it keeps failing, copy the diagnostics.": "请重试。如果仍然失败，请复制诊断信息。",
  "Connecting...": "正在连接…",
  "Reconnecting...": "正在重新连接…",
  "Waiting for approval": "正在等待批准",
  "Waiting for approval on the host": "正在等待目标设备批准",
  "Failed to connect. Reconnecting...": "连接失败，正在重新连接…",
  "This device is waiting for approval on the host.": "当前设备正在等待目标设备批准连接。",
  "Your DNS or firewall may be blocking T3 Connect. Try another network, such as a different Wi-Fi or mobile data.":
    "你的 DNS 或防火墙可能拦截了 T3 Connect。请尝试更换其他网络（例如切换 Wi-Fi 或移动数据）。",
  "Hint: Check that automatic date and time is enabled on both devices, then try again.":
    "提示：请确认两端设备均已开启“自动设置日期与时间”，然后再重试。",
  "Hint: Try again. If it still fails, clock skew may be the cause; check that automatic date and time is enabled on both devices.":
    "提示：请重试。若仍失败，可能是系统时间不同步导致的，请检查两端设备是否均已开启“自动设置日期与时间”。",
  "Hint: Try again. If the problem continues, copy the trace ID.":
    "提示：请重试。如果问题持续出现，请复制调用链编号以便排查。",
  "Relay rejected the cloud session token.": "中转服务拒绝了云端会话令牌。",
  "Relay rejected the authenticated request.": "中转服务拒绝了此已认证请求。",
  "Relay rejected an expired environment link proof.": "中转服务拒绝了已过期的设备关联凭据。",
  "Relay has no active link for this environment. If it was deregistered from T3 Connect, link it again on that machine.":
    "中转服务未找到该设备的有效关联记录。如果之前已从 T3 Connect 解绑，请重新在该设备上关联。",
  "The environment's T3 Connect tunnel is still being set up.":
    "该设备的 T3 Connect 隧道仍在建立中。",
  "This environment is linked only to publish agent activity, so it cannot accept connections. On that computer, open Settings > Sharing & access and turn T3 Connect on.":
    "该设备目前仅用于发布智能体动态，暂无法接受远程连接。请在该电脑上打开「设置 → 共享与访问权限」并开启 T3 Connect。",
  "Relay rejected the environment connection request.": "中转服务拒绝了设备连接请求。",
  "Relay timed out while contacting the environment endpoint.": "中转服务连接设备端点时超时。",
  "Relay rejected an expired agent activity publish proof.":
    "中转服务拒绝了已过期的智能体动态发布凭据。",
  "Relay timed out before it finished the request (HTTP 504). Try again in a few minutes. If it keeps failing, copy the trace ID when you report it.":
    "中转服务处理请求超时（HTTP 504）。请几分钟后再试；如果问题持续存在，反馈时请附上调用链编号。",
  "Offline for a while, so its T3 Connect tunnel was removed. Start T3 Code on that computer and update it to the latest version to reconnect.":
    "设备离线时间较长，其 T3 Connect 隧道已被释放。请在该电脑上启动 T3 Code 并更新至最新版本即可重新连接。",
  "The environment credential is invalid.": "运行设备凭证无效。",
  "The environment credential does not grant the required access.":
    "运行设备凭证未授予所需的访问权限。",
  "The environment rejected the authentication request.": "运行设备拒绝了身份验证请求。",
  "The environment endpoint could not be found.": "未找到该运行设备的服务端点。",
  "The environment could not authorize the connection.": "运行设备无法授权此次连接。",
  "The pairing details are invalid.": "配对信息无效。",
  "Only saved bearer environments can be edited.": "仅支持编辑已保存的令牌连接设备。",
  "The saved bearer credential is unavailable.": "已保存的连接令牌凭证不可用。",
  "Environment label cannot be empty.": "运行设备名称不能为空。",
  "The environment URL is invalid.": "运行设备地址无效。",
  "Sign in to T3 Connect to see agents": "登录 T3 Connect 以查看智能体",
  "Couldn't reach T3 Connect": "无法连接 T3 Connect",
  "Loading agents…": "正在加载智能体…",
  "No active agents": "暂无运行中的智能体",
  "Out of date": "状态已过期",
  "Relay rejected the DPoP proof.": "中转服务拒绝了 DPoP 凭据验证。",
  "Relay URL must be a secure absolute HTTPS origin.": "中转地址必须是安全的完整 HTTPS 源。",
} as const satisfies Readonly<Record<string, string>>;

function translateDynamicMessage(value: string): string | null {
  const traceIdMessage = /^([\s\S]+)\n\nTrace ID: (.+)$/.exec(value);
  if (traceIdMessage) {
    return `${localizeMobileString(traceIdMessage[1]!, "zh-CN")}\n\n调用链编号：${traceIdMessage[2]}`;
  }

  const forgetWithNote = /^Forget (.+) and its cached threads on this device\.\n\n([\s\S]+)$/.exec(
    value,
  );
  if (forgetWithNote) {
    return `要从当前设备移除 ${forgetWithNote[1]} 及其本地缓存的对话吗？\n\n${localizeMobileString(forgetWithNote[2]!, "zh-CN")}`;
  }

  const forgetSwitchOff =
    /^Forget (.+) and its cached threads on this device\. Switch it off instead to keep it saved\.$/.exec(
      value,
    );
  if (forgetSwitchOff) {
    return `要从当前设备移除 ${forgetSwitchOff[1]} 及其本地缓存的对话吗？如果只是暂时不用，建议直接关闭开关保留配置。`;
  }

  const keepRetryingPrefix = /^The app will keep retrying automatically\. ([\s\S]+)$/.exec(value);
  if (keepRetryingPrefix) {
    return `应用将继续自动重试。${localizeMobileString(keepRetryingPrefix[1]!, "zh-CN")}`;
  }

  const failedConnectReason = /^Failed to connect\. Reconnecting\.\.\. Reason: ([\s\S]+)$/.exec(
    value,
  );
  if (failedConnectReason) {
    return `连接失败，正在重新连接… 原因：${localizeMobileString(failedConnectReason[1]!, "zh-CN")}`;
  }

  const connectionFailedReason = /^Connection failed\. Reason: ([\s\S]+)$/.exec(value);
  if (connectionFailedReason) {
    return `连接失败。原因：${localizeMobileString(connectionFailedReason[1]!, "zh-CN")}`;
  }

  const couldNotLink = /^Could not link: ([\s\S]+)$/.exec(value);
  if (couldNotLink) {
    return `未能完成关联：${localizeMobileString(couldNotLink[1]!, "zh-CN")}`;
  }

  const trailingHint =
    /^([\s\S]+?) (Hint: Check that automatic date and time is enabled on both devices, then try again\.|Hint: Try again\. If it still fails, clock skew may be the cause; check that automatic date and time is enabled on both devices\.|Hint: Try again\. If the problem continues, copy the trace ID\.|Your DNS or firewall may be blocking T3 Connect\. Try another network, such as a different Wi-Fi or mobile data\.)$/.exec(
      value,
    );
  if (trailingHint) {
    return `${localizeMobileString(trailingHint[1]!, "zh-CN")} ${localizeMobileString(trailingHint[2]!, "zh-CN")}`;
  }

  const createPrivateRepository = /^Create private repository on (.+)$/.exec(value);
  if (createPrivateRepository) return `在 ${createPrivateRepository[1]} 上创建私有仓库`;
  const createRepositoryFailure = /^Could not create the (.+) repository$/.exec(value);
  if (createRepositoryFailure) return `无法创建 ${createRepositoryFailure[1]} 仓库`;

  const updatingProviders = /^Updating (\d+) providers…$/.exec(value);
  if (updatingProviders) return `正在更新 ${updatingProviders[1]} 个供应商…`;
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
    return `将从 ${removeManagedInstall[1]} 卸载 T3 内置安装的程序。使用它的供应商需重新安装后才能运行；Google 登录凭证和历史对话都会保留。`;
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

  // T3 Connect, connection management, diagnosis, routes, approval & link requests
  const deregisterConfirm =
    /^“(.+)” will be removed from this account\. T3 Connect access will be revoked, any managed tunnel will be removed, and a host space will become available\. Local connections on your devices are not changed\.$/.exec(
      value,
    );
  if (deregisterConfirm) {
    return `“${deregisterConfirm[1]}”将从当前账号中移除。其 T3 Connect 访问权限将被撤销，托管隧道也会被移除，并释放一个设备名额。你各设备上的本地直连配置不会受到影响。`;
  }

  const actionsFor = /^Actions for (.+)$/.exec(value);
  if (actionsFor) return `${actionsFor[1]} 的操作`;

  const copyTraceId = /^Copy trace ID (.+)$/.exec(value);
  if (copyTraceId) return `复制调用链编号 ${copyTraceId[1]}`;

  const retryingAttempt = /^Retrying · attempt (\d+)$/.exec(value);
  if (retryingAttempt) return `正在重试 · 第 ${retryingAttempt[1]} 次`;

  const removeFromDevice = /^Remove (.+) from this device$/.exec(value);
  if (removeFromDevice) return `从此设备移除 ${removeFromDevice[1]}`;

  const removeRoute = /^Remove (.+) route$/.exec(value);
  if (removeRoute) return `移除 ${removeRoute[1]} 路由`;

  const removeConfirm = /^Remove (.+)\?$/.exec(value);
  if (removeConfirm) return `移除 ${removeConfirm[1]}？`;

  const enableEnv = /^Enable (.+)$/.exec(value);
  if (enableEnv) return `启用 ${enableEnv[1]}`;

  const toggleDetailsFor = /^(Expand|Collapse) details for (.+)$/.exec(value);
  if (toggleDetailsFor) {
    return `${toggleDetailsFor[1] === "Expand" ? "展开" : "收起"} ${toggleDetailsFor[2]} 的详情`;
  }

  const reorderItem = /^Reorder (.+)$/.exec(value);
  if (reorderItem) return `调整 ${reorderItem[1]} 顺序`;

  const prRoutingLabel = /^(.+) pull request routing$/.exec(value);
  if (prRoutingLabel) return `${prRoutingLabel[1]} 的合并请求路由`;

  const permissionsChanged = /^Permissions have changed for (.+)$/.exec(value);
  if (permissionsChanged) return `${permissionsChanged[1]} 的连接权限已变更`;

  const connectApprovalRequest =
    /^(.+) wants to connect to (.+) through T3 Connect\. It shows code (.+)\. Approve it only if that code matches\.$/.exec(
      value,
    );
  if (connectApprovalRequest) {
    const device = localizeMobileString(connectApprovalRequest[1]!, "zh-CN");
    return `${device} 请求通过 T3 Connect 连接到 ${connectApprovalRequest[2]}，屏幕上显示的验证码为 ${connectApprovalRequest[3]}。请仅在验证码一致时点击批准。`;
  }

  const linkedFrom = /^Linked from (.+)$/.exec(value);
  if (linkedFrom) return `关联自 ${linkedFrom[1]}`;

  const linkedWithAccess = /^Linked (.+) · (.+)$/.exec(value);
  if (linkedWithAccess) {
    return `已关联 ${linkedWithAccess[1]} · ${localizeMobileString(linkedWithAccess[2]!, "zh-CN")}`;
  }

  const linkedTarget = /^Linked (.+)$/.exec(value);
  if (linkedTarget) {
    return /\d{4}/.test(linkedTarget[1]!)
      ? `关联于 ${linkedTarget[1]}`
      : `已关联 ${linkedTarget[1]}`;
  }

  const foundAutomatically = /^(.+) · found automatically$/.exec(value);
  if (foundAutomatically) return `${foundAutomatically[1]} · 自动发现`;

  const routeOrder = /^Route (\d+) of (\d+)$/.exec(value);
  if (routeOrder) return `第 ${routeOrder[1]} / ${routeOrder[2]} 条路由`;

  const expiresInDays = /^Expires in (\d+) days?$/.exec(value);
  if (expiresInDays) return `${expiresInDays[1]} 天后过期`;

  const updateConfirm = /^Update (.+)\?$/.exec(value);
  if (updateConfirm) return `更新 ${updateConfirm[1]}？`;

  const installUpdateConfirm =
    /^Install T3 Code ([^.]+)\. (?:(The desktop app will close and relaunch\.|The server will restart and reconnect\.|T3 Code restarts on that machine and reconnects\.) )?Running threads may be interrupted\.$/.exec(
      value,
    );
  if (installUpdateConfirm) {
    const restartSentence =
      installUpdateConfirm[2] === "The desktop app will close and relaunch."
        ? "桌面端应用将关闭并重新启动。"
        : installUpdateConfirm[2] === "T3 Code restarts on that machine and reconnects."
          ? "该设备上的 T3 Code 将重启并重新连接。"
          : "服务端将重启并重新连接。";
    return `将安装 T3 Code ${installUpdateConfirm[1]}。${restartSentence}正在运行的对话可能会暂时中断。`;
  }

  const updatedTo = /^Updated to (.+)\.$/.exec(value);
  if (updatedTo) return `已更新至 ${updatedTo[1]}。`;

  const managedBy = /^Managed by (.+)$/.exec(value);
  if (managedBy) return `由 ${managedBy[1]} 托管`;

  const getHelpFrom = /^Get help from (.+)$/.exec(value);
  if (getHelpFrom) return `向 ${getHelpFrom[1]} 获取帮助`;

  const versionAvailable = /^Version (.+) is available\.$/.exec(value);
  if (versionAvailable) return `新版本 ${versionAvailable[1]} 已就绪。`;

  const versionLabel = /^Version (.+)$/.exec(value);
  if (versionLabel) return `版本 ${versionLabel[1]}`;

  const updateTo = /^Update to (.+)$/.exec(value);
  if (updateTo) return `更新至 ${updateTo[1]}`;

  const latestVersion = /^· Latest (.+)$/.exec(value);
  if (latestVersion) return `· 最新版 ${latestVersion[1]}`;

  const updateStatus = /^Update (queued|running|completed|failed|idle)$/.exec(value);
  if (updateStatus) {
    const statusMap: Record<string, string> = {
      queued: "已排队",
      running: "进行中",
      completed: "已完成",
      failed: "失败",
      idle: "空闲",
    };
    return `更新${statusMap[updateStatus[1]!] ?? updateStatus[1]}`;
  }

  const readonlyProvidersHint =
    /^This session can view (.+)'s providers but can't change their settings\.$/.exec(value);
  if (readonlyProvidersHint) {
    return `当前会话仅可查看 ${readonlyProvidersHint[1]} 的供应商，无法修改其设置。`;
  }

  const signOutWarning =
    /^Running threads sharing this sign-in on (.+) will stop\. Thread history is kept\.$/.exec(
      value,
    );
  if (signOutWarning) {
    return `${signOutWarning[1]} 上正在使用此登录账号的运行中对话将会停止，历史对话记录会保留。`;
  }

  const cancelSignIn = /^Cancel (.+) sign-in$/.exec(value);
  if (cancelSignIn) return `取消登录 ${cancelSignIn[1]}`;

  const accountOptions = /^(.+) account options$/.exec(value);
  if (accountOptions) return `${accountOptions[1]} 账号选项`;

  const signInTo = /^Sign in to (.+)$/.exec(value);
  if (signInTo) return `登录 ${signInTo[1]}`;

  const connectingTo = /^Connecting to (.+)\.\.\.$/.exec(value);
  if (connectingTo) return `正在连接到 ${connectingTo[1]}…`;

  const reconnectingTo = /^Reconnecting to (.+)\.\.\.$/.exec(value);
  if (reconnectingTo) return `正在重新连接到 ${reconnectingTo[1]}…`;

  const connectTo = /^Connect to (.+)$/.exec(value);
  if (connectTo) return `连接到 ${connectTo[1]}`;

  const enterDeviceCode = /^Enter code (.+) on the sign-in page\.$/.exec(value);
  if (enterDeviceCode) return `请在登录页面输入验证码 ${enterDeviceCode[1]}。`;

  const linkEnvCardTitle = /^Link (.+) to this environment$/.exec(value);
  if (linkEnvCardTitle) return `将 ${linkEnvCardTitle[1]} 关联到此运行设备`;

  const linkNoAddress =
    /^This app has no address for (.+) that another machine can reach\. Enter its https or Tailscale address\.$/.exec(
      value,
    );
  if (linkNoAddress) {
    return `本应用目前没有其他设备可访问的 ${linkNoAddress[1]} 地址。请输入其 https 或 Tailscale 地址。`;
  }

  const alreadyLinkedTo =
    /^This environment is already linked to (.+)\. The agent can use that link as it is; change its access in Settings → Environments\.$/.exec(
      value,
    );
  if (alreadyLinkedTo) {
    return `此运行设备已关联到 ${alreadyLinkedTo[1]}。智能体可直接按当前权限使用该关联；如需调整权限，请前往「设置 → 运行设备」。`;
  }

  const createLinkInstructions =
    /^Create a link on (.+): Settings → Sharing & access → Authorized clients → Create link, then paste its code here\.$/.exec(
      value,
    );
  if (createLinkInstructions) {
    return `请在 ${createLinkInstructions[1]} 上创建关联：设置 → 共享与访问权限 → 已授权客户端 → 创建关联，然后将生成的配对码粘贴到下方。`;
  }

  const localizeResourceName = (resource: string) => {
    switch (resource) {
      case "preview":
        return "预览";
      case "review":
        return "改动对比";
      case "terminal":
        return "终端";
      case "files":
        return "文件";
      case "threads":
      case "thread":
        return "对话";
      default:
        return resource;
    }
  };

  const waitingForHostApproval = /^Waiting for (.+) to approve this device$/.exec(value);
  if (waitingForHostApproval) return `正在等待 ${waitingForHostApproval[1]} 批准此设备`;

  const hostUnavailable = /^(.+) is unavailable$/.exec(value);
  if (hostUnavailable) return `${hostUnavailable[1]} 暂不可用`;

  const hostDisconnected = /^(.+) is disconnected$/.exec(value);
  if (hostDisconnected) return `${hostDisconnected[1]} 已断开连接`;

  const offlineResource =
    /^Cached data remains available\. The (.+) will load when your connection returns\.$/.exec(
      value,
    );
  if (offlineResource) {
    return `已缓存的数据仍可查看。恢复连接后将自动加载${localizeResourceName(offlineResource[1]!)}。`;
  }

  const connectingResource = /^The (.+) will load as soon as the environment is ready\.$/.exec(
    value,
  );
  if (connectingResource) {
    return `运行设备就绪后将立即加载${localizeResourceName(connectingResource[1]!)}。`;
  }

  const reconnectResource = /^Reconnect the environment to load the (.+)\.$/.exec(value);
  if (reconnectResource) {
    return `请重新连接运行设备以加载${localizeResourceName(reconnectResource[1]!)}。`;
  }

  // Diagnosis headlines, steps, and hops
  const diagWaitingApproval = /^(.+) is waiting for someone to approve this device$/.exec(value);
  if (diagWaitingApproval) return `${diagWaitingApproval[1]} 正在等待批准此设备`;

  const diagOlderT3 = /^(.+) runs an older T3 Code$/.exec(value);
  if (diagOlderT3) return `${diagOlderT3[1]} 运行的是较旧版本的 T3 Code`;

  const diagNotLinked = /^(.+) is not linked to your T3 Connect account$/.exec(value);
  if (diagNotLinked) return `${diagNotLinked[1]} 未关联到你的 T3 Connect 账号`;

  const diagTunnelSettingUp = /^(.+)'s tunnel is still being set up$/.exec(value);
  if (diagTunnelSettingUp) return `${diagTunnelSettingUp[1]} 的连接隧道仍在建立中`;

  const diagConnectOff = /^T3 Connect is not turned on for (.+)$/.exec(value);
  if (diagConnectOff) return `${diagConnectOff[1]} 尚未开启 T3 Connect`;

  const diagTunnelOffline = /^(.+)'s tunnel is offline$/.exec(value);
  if (diagTunnelOffline) return `${diagTunnelOffline[1]} 的连接隧道当前离线`;

  const diagTunnelWorksNoAnswer = /^Tunnel works, but T3 Code on (.+) did not answer$/.exec(value);
  if (diagTunnelWorksNoAnswer) {
    return `隧道已连通，但 ${diagTunnelWorksNoAnswer[1]} 上的 T3 Code 未响应`;
  }

  const diagUnexpectedAnswer = /^T3 Code on (.+) sent an unexpected answer$/.exec(value);
  if (diagUnexpectedAnswer) return `${diagUnexpectedAnswer[1]} 上的 T3 Code 返回了异常响应`;

  const diagDnsFailed = /^(.+)'s tunnel address did not resolve$/.exec(value);
  if (diagDnsFailed) return `无法解析 ${diagDnsFailed[1]} 的隧道域名`;

  const diagTlsFailed = /^Secure connection to (.+)'s tunnel failed$/.exec(value);
  if (diagTlsFailed) return `与 ${diagTlsFailed[1]} 隧道的安全连接握手失败`;

  const diagRefused = /^(.+)'s tunnel refused the connection$/.exec(value);
  if (diagRefused) return `${diagRefused[1]} 的隧道拒绝了连接`;

  const diagTimeout = /^(.+) did not answer in time$/.exec(value);
  if (diagTimeout) return `${diagTimeout[1]} 响应超时`;

  const diagDeviceCantReachTunnel = /^This device can't reach (.+)'s tunnel$/.exec(value);
  if (diagDeviceCantReachTunnel) return `当前设备无法连接到 ${diagDeviceCantReachTunnel[1]} 的隧道`;

  const diagRelayCantReachTunnel = /^T3 Connect could not reach (.+)'s tunnel$/.exec(value);
  if (diagRelayCantReachTunnel)
    return `T3 Connect 无法连接到 ${diagRelayCantReachTunnel[1]} 的隧道`;

  const diagHostRejectedDevice = /^T3 Code on (.+) did not accept this device$/.exec(value);
  if (diagHostRejectedDevice) return `${diagHostRejectedDevice[1]} 上的 T3 Code 未接受当前设备`;

  const diagHostNoAnswer = /^T3 Code on (.+) did not answer$/.exec(value);
  if (diagHostNoAnswer) return `${diagHostNoAnswer[1]} 上的 T3 Code 未响应`;

  const stepCheckConnectStatus =
    /^On (.+), check Settings > Sharing & access or run `t3 connect status`\.$/.exec(value);
  if (stepCheckConnectStatus) {
    return `请在 ${stepCheckConnectStatus[1]} 上检查「设置 → 共享与访问权限」，或运行 \`t3 connect status\`。`;
  }

  const stepApproveInSettings =
    /^On a device already connected to (.+), open Settings > Sharing & access and (approve the device showing (.+)|approve this device)\.$/.exec(
      value,
    );
  if (stepApproveInSettings) {
    const target = stepApproveInSettings[3]
      ? `批准显示验证码 ${stepApproveInSettings[3]} 的设备`
      : "批准此设备";
    return `在已连接到 ${stepApproveInSettings[1]} 的设备上，打开「设置 → 共享与访问权限」并${target}。`;
  }

  const stepApproveCli = /^Or run `t3 auth connect-device approve (.+)` on (.+)\.$/.exec(value);
  if (stepApproveCli) {
    return `或者在 ${stepApproveCli[2]} 上运行 \`t3 auth connect-device approve ${stepApproveCli[1]}\`。`;
  }

  const stepUpdateOnHost = /^Update T3 Code on (.+)\.$/.exec(value);
  if (stepUpdateOnHost) return `请更新 ${stepUpdateOnHost[1]} 上的 T3 Code。`;

  const stepAutoTime =
    /^Turn on automatic date and time on this device and on (.+), then retry\.$/.exec(value);
  if (stepAutoTime) {
    return `请在当前设备和 ${stepAutoTime[1]} 上开启“自动设置日期与时间”，然后重试。`;
  }

  const stepEnableConnect =
    /^On (.+), open Settings > Sharing & access and turn T3 Connect on\.$/.exec(value);
  if (stepEnableConnect) {
    return `请在 ${stepEnableConnect[1]} 上打开「设置 → 共享与访问权限」并开启 T3 Connect。`;
  }

  const stepAwakeAndRunning = /^Make sure (.+) is awake and T3 Code is running on it\.$/.exec(
    value,
  );
  if (stepAwakeAndRunning) {
    return `请确保 ${stepAwakeAndRunning[1]} 未休眠，且已运行 T3 Code。`;
  }

  const stepVpnPort =
    /^A VPN or Tailscale exit node on (.+) can block the tunnel \(port 7844\)\. Turn it off or allow the tunnel\.$/.exec(
      value,
    );
  if (stepVpnPort) {
    return `${stepVpnPort[1]} 上的 VPN 或 Tailscale 出口节点可能会拦截隧道（7844 端口）。请关闭它或放行隧道流量。`;
  }

  const stepRestartOnHost = /^Open or restart T3 Code on (.+)\.$/.exec(value);
  if (stepRestartOnHost) return `请在 ${stepRestartOnHost[1]} 上启动或重启 T3 Code。`;

  const stepAwakeAndOnline = /^Make sure (.+) is awake and online\.$/.exec(value);
  if (stepAwakeAndOnline) return `请确保 ${stepAwakeAndOnline[1]} 未休眠且已联网。`;

  const stepReAddDevice =
    /^If it keeps failing, remove (.+) from this device and add it again\.$/.exec(value);
  if (stepReAddDevice) return `如果仍然失败，请从此设备移除 ${stepReAddDevice[1]} 后重新添加。`;

  const stepMakeSureRunning = /^Make sure T3 Code is running on (.+)\.$/.exec(value);
  if (stepMakeSureRunning) return `请确保 ${stepMakeSureRunning[1]} 上正在运行 T3 Code。`;

  const hopTunnel = /^(.+) tunnel$/.exec(value);
  if (hopTunnel) return `${hopTunnel[1]} 隧道`;

  const hopServer = /^T3 Code on (.+)$/.exec(value);
  if (hopServer) return `${hopServer[1]} 上的 T3 Code`;

  // Host freeze & compatibility notices
  const hostFreezeCombined =
    /^(.+) froze for (\d+)s\. (?:Its CPU is overloaded \(load (\d+) on (\d+) cores\)\.|T3 Code on (.+) was too busy to answer\.)$/.exec(
      value,
    );
  if (hostFreezeCombined) {
    const desc =
      hostFreezeCombined[3] !== undefined
        ? `CPU 负载过高（${hostFreezeCombined[4]} 核负载 ${hostFreezeCombined[3]}）。`
        : `${hostFreezeCombined[5]} 上的 T3 Code 过于繁忙，未能及时响应。`;
    return `${hostFreezeCombined[1]} 曾无响应 ${hostFreezeCombined[2]} 秒。${desc}`;
  }

  const hostFreezeTitle = /^(.+) froze for (\d+)s$/.exec(value);
  if (hostFreezeTitle) return `${hostFreezeTitle[1]} 曾无响应 ${hostFreezeTitle[2]} 秒`;

  const hostFreezeCpu = /^Its CPU is overloaded \(load (\d+) on (\d+) cores\)\.$/.exec(value);
  if (hostFreezeCpu) {
    return `CPU 负载过高（${hostFreezeCpu[2]} 核负载 ${hostFreezeCpu[1]}）。`;
  }

  const hostFreezeBusy = /^T3 Code on (.+) was too busy to answer\.$/.exec(value);
  if (hostFreezeBusy) return `${hostFreezeBusy[1]} 上的 T3 Code 过于繁忙，未能及时响应。`;

  const unsupportedApp =
    /^This client is not supported by this server\. Update your app or use a compatible release to connect to (.+)\.$/.exec(
      value,
    );
  if (unsupportedApp) {
    return `当前服务端不支持此客户端。请更新应用或使用兼容版本以连接到 ${unsupportedApp[1]}。`;
  }

  const unsupportedServer =
    /^This client requires a newer server\. Update T3 Code on (.+) to connect\.$/.exec(value);
  if (unsupportedServer) {
    return `当前客户端需要更新版本的服务端。请更新 ${unsupportedServer[1]} 上的 T3 Code 后再连接。`;
  }

  // Relay & connection error presentations
  const relayLinkProofInvalid = /^Relay rejected the environment link proof \((.+)\)\.$/.exec(
    value,
  );
  if (relayLinkProofInvalid) {
    return `中转服务拒绝了设备关联凭据（${relayLinkProofInvalid[1]}）。`;
  }

  const relayConnectRejected =
    /^Relay rejected the environment connection request \((.+)\)\.$/.exec(value);
  if (relayConnectRejected) {
    return `中转服务拒绝了设备连接请求（${relayConnectRejected[1]}）。`;
  }

  const relayEndpointUnreachable =
    /^Relay could not reach the environment endpoint \((.+)\)\.$/.exec(value);
  if (relayEndpointUnreachable) {
    return `中转服务无法连接到设备端点（${relayEndpointUnreachable[1]}）。`;
  }

  const relayCouldNotLink = /^Relay could not link the environment \((.+)\)\.$/.exec(value);
  if (relayCouldNotLink) return `中转服务未能关联该设备（${relayCouldNotLink[1]}）。`;

  const relayCannotProvision =
    /^Relay cannot provision the managed endpoint \(([^)]+)\)\.(?: Failed stage: (.+)\.)?$/.exec(
      value,
    );
  if (relayCannotProvision) {
    const stage = relayCannotProvision[2] ? ` 失败阶段：${relayCannotProvision[2]}。` : "";
    return `中转服务无法分配托管端点（${relayCannotProvision[1]}）。${stage}`;
  }

  const relayLinkLimitWithPlan =
    /^Relay refused the link: this account already has its maximum of (\d+) managed tunnels\. Unlink an environment, or link a paid T3 Chat account in your T3 Connect account settings on web or desktop\. Pro raises the default limit to (\d+) and Premier to (\d+)\.$/.exec(
      value,
    );
  if (relayLinkLimitWithPlan) {
    return `中转服务拒绝关联：当前账号已达到 ${relayLinkLimitWithPlan[1]} 条托管隧道的上限。请解绑部分运行设备，或在网页端/桌面端的 T3 Connect 账号设置中关联付费 T3 Chat 账号（Pro 可提升至 ${relayLinkLimitWithPlan[2]} 条，Premier 可提升至 ${relayLinkLimitWithPlan[3]} 条）。`;
  }

  const relayLinkLimitMax =
    /^Relay refused the link: this account already has its maximum of (\d+) managed tunnels\. Unlink an environment to free one up\.$/.exec(
      value,
    );
  if (relayLinkLimitMax) {
    return `中转服务拒绝关联：当前账号已达到 ${relayLinkLimitMax[1]} 条托管隧道的上限。请解绑部分运行设备以释放名额。`;
  }

  const relayActivityProofInvalid =
    /^Relay rejected the agent activity publish proof \((.+)\)\.$/.exec(value);
  if (relayActivityProofInvalid) {
    return `中转服务拒绝了智能体动态发布凭据（${relayActivityProofInvalid[1]}）。`;
  }

  const relayInternalError = /^Relay encountered an internal error \((.+)\)\.$/.exec(value);
  if (relayInternalError) return `中转服务遇到内部错误（${relayInternalError[1]}）。`;

  const relayHttpStatus = /^Relay returned an unexpected HTTP (\d+)\.$/.exec(value);
  if (relayHttpStatus) return `中转服务返回了意外的 HTTP ${relayHttpStatus[1]} 状态。`;

  const profileUnavailable = /^Connection profile (.+) is unavailable\.$/.exec(value);
  if (profileUnavailable) return `连接配置 ${profileUnavailable[1]} 不可用。`;

  const credentialUnavailable = /^Connection credential (.+) is unavailable\.$/.exec(value);
  if (credentialUnavailable) return `连接凭证 ${credentialUnavailable[1]} 不可用。`;

  const envMismatch = /^Connected environment (.+) does not match (.+)\.$/.exec(value);
  if (envMismatch)
    return `已连接的运行设备 ${envMismatch[1]} 与预期设备 ${envMismatch[2]} 不匹配。`;

  const onboardingWrongMachine =
    /^That address reaches (.+), a different machine\. Add it as its own environment instead\.$/.exec(
      value,
    );
  if (onboardingWrongMachine) {
    return `该地址连接的是另一台设备（${onboardingWrongMachine[1]}）。请将其作为独立的运行设备重新添加。`;
  }

  // Generic fallbacks (must follow specific patterns above)
  const closeTitle = /^Close (.+)$/.exec(value);
  if (closeTitle) return `关闭${localizeMobileString(closeTitle[1]!, "zh-CN")}`;

  const linkTargetTitle = /^Link (.+)$/.exec(value);
  if (linkTargetTitle) return `关联 ${linkTargetTitle[1]}`;

  const manageTarget = /^Manage (.+)$/.exec(value);
  if (manageTarget) return `管理 ${manageTarget[1]}`;

  const updateGeneric = /^Update (.+)$/.exec(value);
  if (updateGeneric) return `更新 ${updateGeneric[1]}`;

  const deviceBrowserOnOs = /^([^.!?:]+) on ([^.!?:]+)$/.exec(value);
  if (deviceBrowserOnOs) return `${deviceBrowserOnOs[2]} 上的 ${deviceBrowserOnOs[1]}`;

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
