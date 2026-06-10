# 个人简历网站 - 创建说明

**创建时间：** 2026-06-10 14:52  
**项目路径：** `C:\Users\11782\.qclaw\workspace\resume-website`

---

## 📁 文件结构

```
resume-website/
├── index.html      # 主页面（内容编辑在此）
├── style.css       # 样式文件（外观调整在此）
└── script.js       # 交互脚本（动画效果）
```

---

## ✨ 网站功能

### 已实现的功能

| 功能 | 说明 |
|------|------|
| 📱 响应式设计 | 自动适配手机/平板/电脑 |
| 🎨 现代化设计 | 渐变色彩、圆角卡片、阴影效果 |
| ⚡ 平滑动画 | 滚动显示、技能条动画、数字递增 |
| 📋 完整板块 | 关于我、工作经历、技能、项目、联系 |
| 🔗 社交链接 | GitHub、LinkedIn、Twitter 图标 |
| 📝 联系表单 | 可扩展的后端集成接口 |
| 🧭 固定导航 | 顶部导航栏，点击平滑滚动 |

---

## 🎯 如何自定义内容

### 1️⃣ 修改个人信息（index.html）

打开 `index.html`，搜索并替换以下内容：

**基本信息：**
```html
<!-- 第 18 行附近 -->
<div class="nav-logo">QClaw</div>              <!-- 你的名字/品牌 -->

<!-- 第 37 行附近 -->
<h1 class="hero-name">QClaw</h1>              <!-- 你的名字 -->
<h2 class="hero-title">全栈开发工程师</h2>      <!-- 你的职位 -->

<!-- 第 132 行附近 -->
<div class="info-item">
    <strong>姓名：</strong>
    <span>QClaw</span>                         <!-- 你的姓名 -->
</div>
<div class="info-item">
    <strong>邮箱：</strong>
    <span>your.email@example.com</span>         <!-- 你的邮箱 -->
</div>
```

**关于我：**
```html
<!-- 第 50 行附近 -->
<p>
    我是一名专注于效率工具和自动化解决方案的开发者。
    ...                                       <!-- 修改为你的自我介绍 -->
</p>
```

**工作经历：**
```html
<!-- 第 95-130 行附近 -->
<h3>高级开发工程师</h3>                        <!-- 职位 -->
<span class="timeline-date">2023 - 至今</span>  <!-- 时间 -->
<h4>某科技公司</h4>                            <!-- 公司 -->
<li>负责核心产品的前端架构设计与开发</li>        <!-- 修改为你实际工作内容 -->
```

**技能进度条：**
```html
<!-- 第 160 行附近 -->
<div class="skill-progress" data-width="95"></div>  <!-- 修改数字（0-100）-->
```

**项目作品：**
```html
<!-- 第 210 行附近 -->
<h3>智能工作助手</h3>                          <!-- 项目名 -->
<p>基于 AI 的自动化工作流平台...</p>             <!-- 项目描述 -->
<div class="project-tags">
    <span>React</span>                         <!-- 技术标签 -->
</div>
```

**联系方式：**
```html
<!-- 第 260 行附近 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+8613800138000">+86 138-0013-8000</a>
<span>中国 · 某城市</span>
```

**社交链接：**
```html
<!-- 第 290 行附近 -->
<a href="#" class="social-link" title="GitHub">    <!-- 把 # 改为你的 GitHub 链接 -->
<a href="#" class="social-link" title="LinkedIn">  <!-- 把 # 改为你的 LinkedIn 链接 -->
```

---

### 2️⃣ 修改颜色主题（style.css）

在 `style.css` 文件开头（第 1-18 行）修改 CSS 变量：

```css
:root {
    --primary: #667eea;      /* 主色调（蓝紫色）*/
    --secondary: #764ba2;    /* 副色调（深紫色）*/
    --accent: #f093fb;       /* 强调色（粉色）*/
    --text: #2d3748;         /* 文字颜色 */
    --bg: #ffffff;            /* 背景颜色 */
    --bg-alt: #f7fafc;      /* 交替背景色 */
}
```

**推荐配色方案：**

| 风格 | 主色 | 副色 |
|------|------|------|
| 🔵 科技蓝 | `#667eea` | `#764ba2` |
| 🟢 自然绿 | `#38b2ac` | `#319795` |
| 🔴 活力红 | `#f56565` | `#ed8936` |
| 🟣 优雅紫 | `#9f7aea` | `#667eea` |
| ⚫ 简约灰 | `#4a5568` | `#2d3748` |

---

### 3️⃣ 添加头像照片

**方式一：使用在线图片**
```html
<!-- 第 42 行附近，替换 SVG 为： -->
<div class="hero-image">
    <img src="你的照片链接" alt="头像" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover; box-shadow: 0 20px 60px rgba(0,0,0,0.12);">
</div>
```

**方式二：使用本地图片**
1. 把照片放到 `resume-website` 文件夹
2. 重命名为 `avatar.jpg`
3. 替换代码为：
```html
<div class="hero-image">
    <img src="avatar.jpg" alt="头像" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

---

## 🚀 如何部署上线

### 方案 A：免费托管（推荐）

**GitHub Pages（完全免费）：**
1. 注册 GitHub 账号
2. 创建新仓库，命名为 `yourusername.github.io`
3. 上传这 3 个文件到仓库
4. 访问 `https://yourusername.github.io` 即可

**Vercel（免费 + 极速）：**
1. 注册 Vercel 账号
2. 连接 GitHub 仓库
3. 自动部署，获得 `https://your-site.vercel.app` 域名

**Netlify（免费 + 简单）：**
1. 注册 Netlify 账号
2. 拖拽 `resume-website` 文件夹到 Netlify
3. 自动部署，获得 `https://your-site.netlify.app` 域名

### 方案 B：自己的域名

1. 购买域名（阿里云/腾讯云/GoDaddy）
2. 使用上述任一平台部署
3. 在域名服务商配置 DNS 解析

---

## 📝 下一步建议

1. ✅ **替换所有示例内容** - 改为你的真实信息
2. ✅ **添加真实项目** - 展示你最好的 3-5 个项目
3. ✅ **上传头像照片** - 提升专业感
4. ✅ **测试手机显示** - 确保移动端正常
5. ✅ **部署上线** - 选择免费平台发布
6. ✅ **分享给朋友** - 获取反馈并改进

---

## 🆘 需要帮助？

- **修改内容** - 告诉我你想改什么，我帮你改
- **添加功能** - 比如博客、多语言、深色模式
- **部署上线** - 我可以指导你完成部署
- **绑定域名** - 我可以帮你配置

---

**祝你简历网站顺利上线！🎉**
