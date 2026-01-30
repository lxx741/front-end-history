# GitHub Pages 部署配置

## 网站配置
网站URL: https://lxx.github.io/front-end-history/
仓库名称: front-end-history
部署分支: main

## 自动部署流程

1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发构建
3. 构建完成后自动部署到 GitHub Pages
4. 访问 https://lxx.github.io/front-end-history/ 查看网站

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署状态检查

访问 GitHub Actions 页面查看部署状态：
https://github.com/lxx/front-end-history/actions

## 注意事项

1. 首次部署可能需要等待几分钟
2. 确保仓库启用了 GitHub Pages
3. 如需自定义域名，请修改 `astro.config.mjs` 中的 `site` 配置
4. 国内用户访问可能较慢，建议使用科学上网