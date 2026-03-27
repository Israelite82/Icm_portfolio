import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ADD THIS LINE:
  base: '/',
  
  server: {
    historyApiFallback: true
  },
  
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  
  // ALSO ADD THIS (optional but recommended):
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html' 
    }
  }
})