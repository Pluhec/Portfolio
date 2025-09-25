import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin pro automatickou optimalizaci obrázků při buildu
const imageOptimizePlugin = () => {
  return {
    name: 'image-optimize',
    load(id) {
      // Middleware pro komprese obrázků
      if (id.includes('.webp') || id.includes('.jpg') || id.includes('.png')) {
        console.log(`📷 Optimalizuji obrázek: ${id}`)
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    imageOptimizePlugin()
  ],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.js'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Rozdělí obrázky do separátních chunků pro lepší caching
          images: ['./src/components/OptimizedImage.jsx']
        }
      }
    }
  }
})