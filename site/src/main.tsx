import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { codes, markdown, previews } from '../../README.md?preview';
import './site.css';
import '@wcj/dark-mode';
import CodeLayout from 'react-code-preview-layout';

const MarkdownCode = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

function CodeBlock({ inline, className, children, node, ...props }: any) {
  const language = /language-(\w+)/.exec(className || '')?.[1];
  const meta = node?.data?.meta ?? node?.meta ?? '';
  const previewMatch = String(meta).match(/mdx:preview=(\d+)/);
  const previewIndex = previewMatch ? Number(previewMatch[1]) : -1;
  const Preview = !inline && language && ['jsx', 'tsx'].includes(language) && previewIndex >= 0 ? previews[previewIndex] : null;
  const source = previewIndex >= 0 ? codes[previewIndex] : '';

  if (!Preview) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
      <MarkdownCode>
        <Preview />
      </MarkdownCode>
      <Toolbar text={source} data-code={source}>
        Example
      </Toolbar>
      <Code>
          <code className={className}>{children}</code>
      </Code>
    </CodeLayout>
  );
}

function App() {
  return (
    <main className="site-shell">
      <dark-mode permanent light="Light" dark="Dark"></dark-mode>
      <MarkdownPreview
        source={markdown}
        components={{
          code: CodeBlock
        }}
      />
    </main>
  );
}

const container = document.getElementById('root')!;
const root = ((globalThis as any).__reactHrRoot ??= createRoot(container)) as Root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
