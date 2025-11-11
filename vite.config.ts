import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const repoName = 'my-vue-site-2026'
const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  // Use the repo name as base when deployed to GitHub Pages
  base: basePath,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
