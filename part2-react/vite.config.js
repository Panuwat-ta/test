import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist-V1',
    assetsDir: 'assets',
    sourcemap: false, // ปิดสำหรับ production
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: true
  }// ของผมรันใน wsl แล้วเปิดใน browser ไม่ได้ 
})
