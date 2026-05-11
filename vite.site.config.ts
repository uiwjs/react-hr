import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { markdownPreviewPlugin } from './vite.markdown-preview';

const markdownDependencyPattern = /\/node_modules\/(?:@uiw\/react-markdown-preview|react-markdown|remark-|rehype-|micromark|mdast-|hast-|unist-|unified|vfile|property-information|decode-named-character-reference|html-url-attributes|space-separated-tokens|comma-separated-tokens|trim-lines|ccount|character-entities|character-reference-invalid|markdown-table|zwitch|bail|devlop|is-plain-obj|refractor|prismjs)/;

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze';

  return {
    base: './',
    plugins: [markdownPreviewPlugin(), react()],
    resolve: {
      alias: {
        '@uiw/react-hr': new URL('./src', import.meta.url).pathname
      }
    },
    root: 'site',
    publicDir: false,
    build: {
      outDir: '../www',
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        plugins: isAnalyze
          ? [
              visualizer({
                filename: 'www/site-bundle.html',
                gzipSize: true,
                brotliSize: true,
                template: 'treemap'
              })
            ]
          : undefined,
        output: {
          manualChunks(id) {
            if (!id.includes('/node_modules/')) return;
            if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
              return 'react-vendor';
            }
            if (markdownDependencyPattern.test(id)) {
              return 'markdown-vendor';
            }
          }
        }
      }
    },
    server: {
      host: '127.0.0.1',
      port: 5173
    }
  };
});
