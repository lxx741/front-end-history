# 前端发展史时间轴

一个交互式的网站，展示从1990年到2025年前端技术的发展历程。使用时间轴的形式，生动呈现前端技术的演进、重要事件和里程碑。

## 🌐 在线访问

- **GitHub Pages**: https://lxx.github.io/front-end-history/
- **项目地址**: https://github.com/lxx/front-end-history

## 📋 部署说明

本项目使用 GitHub Actions 自动部署到 GitHub Pages：

### 部署流程
1. 代码推送到 `main` 分支
2. GitHub Actions 自动构建项目
3. 构建产物自动部署到 GitHub Pages
4. 2-3分钟后即可访问

### 手动触发部署
1. 进入 GitHub 仓库的 Actions 页面
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow"

## 🛠️ 本地开发

### 环境要求
- Node.js 18.0.0+
- npm 或 yarn

### 快速开始

```bash
# 克隆项目
git clone https://github.com/lxx/front-end-history.git
cd front-end-history

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321 查看本地版本。

### 构建命令

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📊 项目信息

- **框架**: Astro 5.17.1
- **样式**: Tailwind CSS
- **部署**: GitHub Pages + GitHub Actions
- **内容**: 35年前端发展史（1990-2025）
- **事件数**: 90+ 重要技术事件
- **特性**: 搜索、筛选、快速导航、数据导出

## 🎯 功能特色

### 核心展示
- ✅ 全面覆盖前端技术发展史
- ✅ 6大分类系统化管理
- ✅ 4级重要性分级展示
- ✅ 年代色彩区分

### 交互功能
- ✅ 实时搜索过滤
- ✅ 分类智能筛选
- ✅ 快速年份导航
- ✅ 键盘快捷键支持
- ✅ 数据导出功能

### 视觉效果
- ✅ 创意代码雨背景
- ✅ 几何图形动画
- ✅ 渐变时间轴设计
- ✅ 响应式移动端适配

## 📝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 添加新事件
1. 编辑 `src/data/timeline.json`
2. 按现有格式添加新事件
3. 提交 Pull Request

### 修改样式
1. 编辑 `src/styles/global.css`
2. 或修改 `tailwind.config.mjs`
3. 确保响应式兼容性

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为前端技术发展做出贡献的开发者和组织！

---

**🚀 记录技术的每一次飞跃与变革**