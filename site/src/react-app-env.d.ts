import '@wcj/dark-mode';
import type { DarkMode } from '@wcj/dark-mode';
import type { CSSProperties, HTMLAttributes } from 'react';
declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.md';

declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dark-mode': HTMLAttributes<HTMLElement> & Partial<DarkMode> & {
        style?: CSSProperties;
      };
    }
  }
}

export {};
