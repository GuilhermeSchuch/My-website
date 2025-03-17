import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import createSitemap from "vite-plugin-sitemap"

export default defineConfig({
  plugins: [
    react(),
    createSitemap({
      hostname: 'https://guilhermeschuch.com',
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
})
