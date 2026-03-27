import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  // This ensures public folder files are copied
  publicDir: 'public'
})