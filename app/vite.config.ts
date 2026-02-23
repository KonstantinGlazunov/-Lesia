import path from "path"
import fs from "node:fs"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// Копирование index.html в 404.html для GitHub Pages (SPA: при прямом заходе на /-Lesia/impressum отдаётся тот же index)
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const src = path.join(outDir, 'index.html')
      const dest = path.join(outDir, '404.html')
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/-Lesia/',
  plugins: [
    process.env.NODE_ENV === 'development' ? inspectAttr() : null,
    react(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
