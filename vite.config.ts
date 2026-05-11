import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ReactHr',
      cssFileName: 'style',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'react-hr.js' : 'react-hr.cjs')
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
