import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
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
      plugins:
        mode === 'analyze'
          ? [
              visualizer({
                filename: 'www/lib-bundle.html',
                gzipSize: true,
                brotliSize: true,
                template: 'treemap'
              })
            ]
          : undefined,
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
}));
