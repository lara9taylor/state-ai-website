import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use absolute paths for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];

          if (ext === 'css') {
            return 'assets/[name].[hash].css';
          }

          return 'assets/[name].[hash][extname]';
        }
      }
    },
    copyPublicDir: true
  },
  server: {
    port: 3000,
    host: true
  }
});