import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'ilw-back-to-top',
      entry: 'ilw-back-to-top.js',
      fileName: 'ilw-back-to-top',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
           if (chunkInfo.name === 'style.css') return 'ilw-back-to-top.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
