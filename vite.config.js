import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: {
        quality: 75
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.65, 0.8]
      }
    })
  ],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.js'],
  }
})