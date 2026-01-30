// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false // We'll include our own global CSS
    })
  ],
  // GitHub Pages configuration
  site: 'https://lxx.github.io', // 替换为你的GitHub Pages URL
  base: '/front-end-history/', // 替换为你的仓库名称
  output: 'static',
  build: {
    format: 'directory'
  }
});
