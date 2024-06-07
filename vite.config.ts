import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@enums': path.resolve(__dirname, './src/shared/enums'),
      '@type': path.resolve(__dirname, './src/shared/type'),
      '@router': path.resolve(__dirname, './src/router'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@services': path.resolve(__dirname, './src/services'),
    }
  }
})
