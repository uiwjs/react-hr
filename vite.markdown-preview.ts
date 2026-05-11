import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';
import { normalizePath, type Plugin } from 'vite';

const previewFence = /```(jsx|tsx)\s+mdx:preview[^\n]*\n([\s\S]*?)```/g;
const previewModulePrefix = '\0markdown-preview:';
const publicPreviewModulePrefix = 'virtual:markdown-preview:';

const escapeTemplate = (value: string) => value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const quoteString = (value: string) => JSON.stringify(value);

const toFragmentPreview = (code: string) => `
import React from 'react';

export default function MarkdownPreviewExample() {
  return (
    <>${code}</>
  );
}
`;

const hasDefaultExport = (code: string) => /export\s+default\s+/.test(code);

export function markdownPreviewPlugin(): Plugin {
  const examples = new Map<string, string>();

  return {
    name: 'markdown-preview',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith(publicPreviewModulePrefix)) {
        return `${previewModulePrefix}${id.slice(publicPreviewModulePrefix.length)}`;
      }
      return null;
    },
    async load(id) {
      if (id.startsWith(previewModulePrefix)) {
        const key = id.slice(previewModulePrefix.length);
        const code = examples.get(key);
        if (!code) return null;

        const result = await transform(hasDefaultExport(code) ? code : toFragmentPreview(code), {
          loader: 'tsx',
          jsx: 'automatic',
          format: 'esm'
        });

        return result.code;
      }

      const [filepath, query = ''] = id.split('?');
      if (query !== 'preview' || !filepath.endsWith('.md')) return null;

      const markdown = await readFile(filepath, 'utf8');
      const previewImports: string[] = [];
      const previewExports: string[] = [];
      const previewCodes: string[] = [];
      const normalizedPath = normalizePath(filepath);
      const previewMarkdown = markdown.replace(previewFence, (_block: string, language: string, code: string) => {
        const index = previewImports.length;
        const source = code.trim();
        const key = `${normalizedPath}:${index}`;

        examples.set(key, source);
        previewImports.push(`import Preview${index} from '${publicPreviewModulePrefix}${key}';`);
        previewExports.push(`Preview${index}`);
        previewCodes.push(source);

        return `\`\`\`${language} mdx:preview=${index}\n${code}\`\`\``;
      });

      return `
${previewImports.join('\n')}

const markdown = \`${escapeTemplate(previewMarkdown)}\`;
const previews = [${previewExports.join(', ')}];
const codes = [${previewCodes.map(quoteString).join(', ')}];

export { markdown, previews, codes };
export default { markdown, previews, codes };
`;
    }
  };
}
