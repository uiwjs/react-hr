# @uiw/react-hr

[![Buy me a coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-ffdd00?logo=buy-me-a-coffee&logoColor=black)](https://jaywcjlove.github.io/#/sponsor)
[![Follow On X](https://img.shields.io/badge/Follow%20on%20X-333333?logo=x&logoColor=white)](https://x.com/jaywcjlove)
[![CI](https://github.com/uiwjs/react-hr/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-hr/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@uiw/react-hr.svg)](https://www.npmjs.com/package/@uiw/react-hr)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-hr/file/README.md)

React divider components built on the native `<hr>` element. The component renders every divider style from props, so consumers do not need to import a stylesheet.

## Install

```bash
npm install @uiw/react-hr
```

## Usage

```tsx
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr />
      <Hr variant="dashed-fixed" dashedFilled={6} dashedOpen={5} />
      <Hr variant="solid-content" content="分隔线" />
    </>
  );
}
```

## Basic

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr />
      <Hr variant="solid" />
    </>
  );
}
```

## Dotted

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dotted" />
      <Hr variant="dotted2" />
    </>
  );
}
```

## Dashed

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dashed" />
      <Hr variant="dashed2" />
    </>
  );
}
```

## Double

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="double" />;
}
```

## Fixed Dash

Use `dashedFilled` and `dashedOpen` to control the visible and empty segments.

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dashed-fixed" />
      <Hr variant="dashed-fixed" dashedFilled={6} dashedOpen={5} />
      <Hr variant="dashed-fixed" dashedFilled={12} dashedOpen={4} />
    </>
  );
}
```

## Fade Edges

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="edge-weak" />;
}
```

## Twill

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="twill" />
      <Hr variant="twill-colorful" />
    </>
  );
}
```

## Wavy And Shadow

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="wavy" />
      <Hr variant="shadow" />
    </>
  );
}
```

## Center Decorations

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="mid-circle" />
      <Hr variant="mid-square" />
      <Hr variant="mid-circle" multiple />
      <Hr variant="mid-square" multiple />
    </>
  );
}
```

## Edge Decorations

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="space-square" />
      <Hr variant="double-arrow" />
    </>
  );
}
```

## Content

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="solid-content" content="分隔线" />
      <Hr variant="dashed-content" content="虚线内容" />
      <Hr variant="fade-content" content="两端淡出" />
      <Hr variant="mid-border-content" content="边框内容" />
    </>
  );
}
```

## Custom Colors

```jsx mdx:preview
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr color="#1677ff" />
      <Hr variant="dashed" accentColor="#fa541c" />
      <Hr variant="mid-circle" color="#52c41a" multiple />
      <Hr variant="solid-content" content="自定义颜色" color="#722ed1" accentColor="#722ed1" />
    </>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `HrVariant` | `solid` | Divider style. |
| `color` | `string` | `#d0d0d5` | Primary line and decoration color. |
| `accentColor` | `string` | `#a2a9b6` | Accent color used by dotted, dashed, and twill variants. |
| `content` | `string` | `undefined` | Text for content variants. |
| `multiple` | `boolean` | `false` | Adds repeated center decorations for circle and square variants. |
| `dashedFilled` | `number \| string` | `4px` | Filled segment length for `dashed-fixed`. |
| `dashedOpen` | `number \| string` | `6px` | Empty segment length for `dashed-fixed`. |
| `margin` | `number \| string` | `1.25rem` | Vertical divider margin. |

All native `<hr>` attributes are supported except `children`.
