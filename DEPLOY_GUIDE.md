# GitHub Pages 部署指南

## 🎯 部署状态

✅ 项目已配置完成，准备部署到 GitHub Pages  
✅ GitHub Actions 工作流已设置  
✅ 构建脚本已优化  
✅ 所有文件已提交到本地 Git 仓库  

## 🚀 下一步操作

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`front-end-history`
4. 设置为 Public（重要：私有仓库的免费版有限制）
5. **不要**勾选 "Initialize with README"
6. 点击 "Create repository"

### 2. 连接远程仓库

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/front-end-history.git

# 推送到远程仓库
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库设置页面
   - 点击仓库顶部的 "Settings" 标签
   - 左侧菜单找到 "Pages"

2. 配置 Pages 设置
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
   - 点击 "Save"

3. 等待部署完成（2-3分钟）

### 4. 验证部署

访问以下URL查看网站：
```
https://YOUR_USERNAME.github.io/front-end-history/
```

## 🔧 自定义配置

### 修改 GitHub 用户名

编辑 `astro.config.mjs`：

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io', // 修改为你的GitHub用户名
  base: '/front-end-history/', // 修改为你的仓库名称
  // ... 其他配置
});
```

### 自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件：
```
your-domain.com
```

2. 在域名提供商处配置 CNAME 记录：
```
your-domain.com → YOUR_USERNAME.github.io
```

3. 在 GitHub Pages 设置中添加自定义域名

## 📊 监控部署

### GitHub Actions 状态
- 访问：`https://github.com/YOUR_USERNAME/front-end-history/actions`
- 查看 "Deploy to GitHub Pages" 工作流状态
- 绿色 ✓ 表示部署成功，红色 ✗ 表示失败

### 常见问题排查

1. **部署失败**
   - 检查 `package.json` 中的构建命令
   - 查看 Actions 日志中的错误信息
   - 确保所有依赖都正确安装

2. **页面空白**
   - 检查 `base` 路径配置是否正确
   - 确认静态资源路径是否正确
   - 查看浏览器控制台错误信息

3. **样式丢失**
   - 确认 CSS 文件正确构建
   - 检查 `tailwind.config.mjs` 配置
   - 验证 `global.css` 是否正确引入

## 🎉 部署成功标志

✅ 访问网站正常显示  
✅ 搜索和筛选功能正常  
✅ 移动端响应式正常  
✅ 所有动画效果正常  
✅ 导出功能正常工作  

## 📱 移动端测试建议

1. 使用 Chrome DevTools 模拟移动设备
2. 在真机上测试关键功能
3. 检查触摸操作是否流畅

## 🔄 更新流程

后续更新内容时：

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "update: 添加新内容"

# 3. 推送到远程（自动触发部署）
git push origin main
```

## 📞 技术支持

如遇到问题：
1. 查看 GitHub Actions 日志
2. 检查本项目的 Issue 页面
3. 参考 [GitHub Pages 文档](https://docs.github.com/en/pages)
4. 参考 [Astro 部署指南](https://docs.astro.build/en/guides/deploy/github/)

---

**🚀 准备好将你的前端发展史时间轴部署到 GitHub Pages 了吗？**