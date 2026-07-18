import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/comy": {
        target: "https://comy.co.il",
        changeOrigin: true,
        rewrite: p => p.replace(/^\/comy/, ""),
      },
    },
  }
})
