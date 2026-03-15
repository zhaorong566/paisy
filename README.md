# ✦ Paisy · 炫酷博客网页

一个炫酷的现代博客首页，采用纯 HTML + CSS + JavaScript 构建，无需任何构建工具或依赖，开箱即用。

---

## 🚀 如何本地预览

### 方法一：直接用浏览器打开（最简单）

1. **检出代码**

   如果你想查看已合并到 `main` 分支的最新版本：

   ```bash
   git clone https://github.com/zhaorong566/paisy.git
   cd paisy
   ```

   如果你想查看开发分支（PR 尚未合并时）：

   ```bash
   git clone https://github.com/zhaorong566/paisy.git
   cd paisy
   git checkout copilot/feature-cool-blog-webpage
   ```

   如果你已经克隆过仓库，只需拉取最新更改：

   ```bash
   git pull origin main
   ```

2. **打开博客页面**

   本项目是纯静态网页，**无需安装任何依赖**，直接用浏览器打开 `index.html` 文件即可：

   - **Windows**：在文件资源管理器中双击 `index.html`，或右键 → "用浏览器打开"
   - **macOS**：在 Finder 中双击 `index.html`，或在终端运行：

     ```bash
     open index.html
     ```

   - **Linux**：在终端运行：

     ```bash
     xdg-open index.html
     ```

   浏览器会自动打开博客首页，地址栏显示类似 `file:///path/to/paisy/index.html`。

### 方法二：本地静态服务器（推荐，效果更佳）

使用本地服务器可以避免某些浏览器对 `file://` 协议的安全限制。

**使用 Python（通常已预装）：**

```bash
cd paisy

# Python 3
python3 -m http.server 8080

# Python 2（旧版本）
python -m SimpleHTTPServer 8080
```

然后在浏览器中访问：[http://localhost:8080](http://localhost:8080)

**使用 Node.js（如果已安装）：**

```bash
# 安装一次性静态服务器（无需依赖文件）
npx serve .
```

然后访问终端中显示的地址，通常是：[http://localhost:3000](http://localhost:3000)

**使用 VS Code Live Server 插件：**

1. 安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件
2. 在 VS Code 中打开项目文件夹
3. 右键点击 `index.html` → "Open with Live Server"
4. 浏览器自动打开 [http://127.0.0.1:5500](http://127.0.0.1:5500)

---

## 🌐 在线预览（GitHub Pages）

本项目支持通过 **GitHub Pages** 发布为在线网站，免费且无需服务器。

### 开启步骤

1. 打开仓库页面：[https://github.com/zhaorong566/paisy](https://github.com/zhaorong566/paisy)
2. 点击顶部菜单 **Settings**（设置）
3. 在左侧侧边栏找到 **Pages**
4. 在 **Source** 下选择：
   - Branch: `main`（或你想发布的分支）
   - Folder: `/ (root)`
5. 点击 **Save**

几分钟后，博客将自动发布到：

```
https://zhaorong566.github.io/paisy/
```

> **注意**：首次启用 GitHub Pages 可能需要等待 1~3 分钟才能生效。如果你 fork 了本仓库，请将上面 URL 中的 `zhaorong566` 替换为你自己的 GitHub 用户名。

---

## 📍 博客页面的访问路径

| 环境 | 访问地址 |
|------|---------|
| 直接打开文件 | `file:///path/to/paisy/index.html` |
| Python 服务器 | [http://localhost:8080](http://localhost:8080) |
| npx serve | [http://localhost:3000](http://localhost:3000) |
| VS Code Live Server | [http://127.0.0.1:5500](http://127.0.0.1:5500) |
| GitHub Pages（在线） | [https://zhaorong566.github.io/paisy/](https://zhaorong566.github.io/paisy/) |

博客为单页应用，打开首页即可看到完整内容，无需额外路由或登录。

---

## 🛠️ 故障排查

### 页面打开后是空白
- 确认打开的是 `index.html` 而不是其他文件
- 尝试使用本地服务器（方法二）替代直接打开文件
- 在浏览器开发者工具（F12）→ Console 中查看是否有报错

### 动画或渐变效果不显示
- 请使用现代浏览器（Chrome 90+、Firefox 90+、Edge 90+、Safari 14+）
- 检查浏览器是否开启了"硬件加速"

### GitHub Pages 访问报 404
- 确认 Settings → Pages 中已正确设置 Branch 为 `main`，Folder 为 `/ (root)`
- 确认 `index.html` 文件已提交到对应分支的根目录
- 等待 1~3 分钟，GitHub Pages 部署需要一点时间

### Python 命令提示"Address already in use"（端口占用）
- 换一个端口号，例如 `python3 -m http.server 8081`，然后访问 [http://localhost:8081](http://localhost:8081)

### 使用 `npx serve` 时提示安装确认
- 输入 `y` 并按回车确认安装，之后正常运行

---

## 🎨 功能特性

- 🌌 动态渐变背景 + 鼠标追光效果
- 📜 滚动触发的卡片入场动画
- 📊 数字滚动计数器
- 📱 完全响应式，适配手机、平板、桌面
- 🃏 悬浮放大的博客卡片（含 6 篇精选文章）
- 📬 邮件订阅表单（含输入验证）
- ⚡ 零依赖，无需 npm install，秒速打开