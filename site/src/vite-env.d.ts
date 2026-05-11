declare module '*.md?preview' {
  import type { ComponentType } from 'react';

  export const markdown: string;
  export const previews: ComponentType[];
  export const codes: string[];

  const value: {
    markdown: string;
    previews: ComponentType[];
    codes: string[];
  };

  export default value;
}
