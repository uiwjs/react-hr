import{j as e,r as k,R as g,c as B}from"./react-vendor-vCJmeiA8.js";import{_ as f,a as H,c as R,M as N}from"./markdown-vendor-C-xtZLkx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const D="#d0d0d5",L="#a2a9b6",z="1.25rem",E=(a,t)=>typeof a=="number"?`${a}px`:a??t,q=a=>`url("data:image/svg+xml,${encodeURIComponent(a)}")`,V=a=>q(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><path d="M0 4 Q4 0 8 4 T16 4" fill="none" stroke="${a}" stroke-width="1.4"/></svg>`),W=(a,t)=>[...(t?["calc(50% - 24px)","50%","calc(50% + 24px)"]:["50%"]).map(i=>`linear-gradient(45deg, transparent calc(50% - 5px), ${a} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) ${i} 50% / 12px 12px no-repeat`),`linear-gradient(${a}, ${a}) center / 100% 1px no-repeat`].join(", "),U=(a,t)=>[...(t?["calc(50% - 24px)","50%","calc(50% + 24px)"]:["50%"]).map(i=>`radial-gradient(circle at center, ${a} 0 6px, transparent 6.5px) ${i} 50% / 14px 14px no-repeat`),`linear-gradient(${a}, ${a}) center / 100% 1px no-repeat`].join(", ");function s({variant:a="solid",color:t=D,accentColor:r=L,content:i,multiple:n,dashedFilled:o,dashedOpen:c,margin:p,style:h,...l}){const x=E(p,z),w=E(o,"4px"),S=E(c,"6px"),y={boxSizing:"border-box",border:0,height:"inherit",backgroundColor:"initial",margin:`${x} 0`},I={solid:{borderTop:`1px solid ${t}`},dotted:{borderTop:`1px dotted ${r}`},dotted2:{borderTop:`2px dotted ${r}`},dashed:{borderTop:`1px dashed ${r}`},dashed2:{borderTop:`2px dashed ${r}`},double:{borderTop:`3px double ${t}`},"dashed-fixed":{height:1,background:`repeating-linear-gradient(to right, ${r} 0 ${w}, transparent 0 calc(${w} + ${S}))`},"edge-weak":{height:1,background:`linear-gradient(to right, transparent, ${t}, transparent)`},twill:{height:6,background:`repeating-linear-gradient(135deg, ${r} 0px, ${r} 1px, transparent 1px, transparent 6px)`},"twill-colorful":{height:6,background:"linear-gradient(135deg, red, orange, green, blue, purple)",WebkitMaskImage:"repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)",maskImage:"repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)"},wavy:{height:8,backgroundImage:V(t),backgroundRepeat:"repeat-x",backgroundPosition:"center",backgroundSize:"16px 8px"},shadow:{borderTop:"1px solid rgb(0 0 0 / 10%)",boxShadow:`inset 0 10px 10px -10px ${t}`,paddingTop:10},"mid-circle":{height:14,background:U(t,n)},"mid-square":{height:16,background:W(t,n)},"space-square":{height:16,background:[`linear-gradient(45deg, transparent calc(50% - 5px), ${t} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) left 50% / 12px 12px no-repeat`,`linear-gradient(45deg, transparent calc(50% - 5px), ${t} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) right 50% / 12px 12px no-repeat`,`linear-gradient(${t}, ${t}) center / calc(100% - 32px) 1px no-repeat`].join(", ")},"double-arrow":{height:10,marginLeft:20,marginRight:20,background:[`linear-gradient(45deg, transparent 0 5px, ${t} 5px 7px, transparent 7px) left center / 12px 12px no-repeat`,`linear-gradient(225deg, transparent 0 5px, ${t} 5px 7px, transparent 7px) right center / 12px 12px no-repeat`,`linear-gradient(${t}, ${t}) center calc(50% - 2px) / 100% 1px no-repeat`,`linear-gradient(${t}, ${t}) center calc(50% + 2px) / 100% 1px no-repeat`].join(", ")},"solid-content":{},"dashed-content":{},"fade-content":{},"mid-border-content":{}};if(a.endsWith("content")){const _={...y,flex:1,margin:0,borderTop:a==="dashed-content"?`1px dashed ${t}`:a==="fade-content"?0:`1px solid ${t}`,height:a==="fade-content"?1:void 0,background:a==="fade-content"?`linear-gradient(to right, transparent, ${t}, transparent)`:void 0,...h},P={color:a==="mid-border-content"?"transparent":r,border:a==="mid-border-content"?`1px solid ${t}`:void 0,padding:a==="mid-border-content"?"4px 1ch":"0 1ch",fontSize:12,lineHeight:"1.2",whiteSpace:"nowrap"};return e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:0,margin:`${x} 0`,width:"100%"},children:[e.jsx("hr",{...l,style:_}),e.jsx("span",{"aria-hidden":"true",style:P,children:i}),e.jsx("hr",{"aria-hidden":"true",style:_})]})}return e.jsx("hr",{...l,style:{...y,...I[a],...h}})}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{variant:"solid"})]})}function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"dotted"}),e.jsx(s,{variant:"dotted2"})]})}function G(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"dashed"}),e.jsx(s,{variant:"dashed2"})]})}function X(){return e.jsx(s,{variant:"double"})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"dashed-fixed"}),e.jsx(s,{variant:"dashed-fixed",dashedFilled:6,dashedOpen:5}),e.jsx(s,{variant:"dashed-fixed",dashedFilled:12,dashedOpen:4})]})}function Y(){return e.jsx(s,{variant:"edge-weak"})}function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"twill"}),e.jsx(s,{variant:"twill-colorful"})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"wavy"}),e.jsx(s,{variant:"shadow"})]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"mid-circle"}),e.jsx(s,{variant:"mid-square"}),e.jsx(s,{variant:"mid-circle",multiple:!0}),e.jsx(s,{variant:"mid-square",multiple:!0})]})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"space-square"}),e.jsx(s,{variant:"double-arrow"})]})}function re(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"solid-content",content:"分隔线"}),e.jsx(s,{variant:"dashed-content",content:"虚线内容"}),e.jsx(s,{variant:"fade-content",content:"两端淡出"}),e.jsx(s,{variant:"mid-border-content",content:"边框内容"})]})}function ne(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"#1677ff"}),e.jsx(s,{variant:"dashed",accentColor:"#fa541c"}),e.jsx(s,{variant:"mid-circle",color:"#52c41a",multiple:!0}),e.jsx(s,{variant:"solid-content",content:"自定义颜色",color:"#722ed1",accentColor:"#722ed1"})]})}const ie=`<div markdown="1">
  <sup align="center">Using <a href="https://wangchujiang.com/#/app" target="_blank">my app</a> is also a way to <a href="https://wangchujiang.com/#/sponsor" target="_blank">support</a> me:</sup>
  <br>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6758053530" title="Scap: Screenshot & Markup Edit for macOS"><img alt="Scap: Screenshot & Markup Edit" height="52" src="https://wangchujiang.com/appicon/scap.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6757317079" title="Screen Test for macOS"><img alt="Screen Test" height="52" src="https://wangchujiang.com/appicon/screen-test.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6755948110" title="Deskmark for macOS"><img alt="Deskmark" height="52" src="https://wangchujiang.com/appicon/deskmark.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6500434773" title="Keyzer for macOS"><img alt="Keyzer" height="52" src="https://wangchujiang.com/appicon/keyzer.png"></a>
  <a target="_blank" href="https://github.com/jaywcjlove/vidwall-hub" title="Vidwall Hub for macOS"><img alt="Vidwall Hub" height="52" src="https://wangchujiang.com/appicon/vidwall-hub.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6752624705" title="VidCrop for macOS"><img alt="VidCrop" height="52" src="https://wangchujiang.com/appicon/vidcrop.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6747587746" title="Vidwall for macOS"><img alt="Vidwall" height="52" src="https://wangchujiang.com/appicon/vidwall.png"></a>
  <a target="_blank" href="https://github.com/jaywcjlove/mousio-hint/" title="Mousio Hint for macOS"><img alt="Mousio Hint" height="52" src="https://wangchujiang.com/appicon/mousio-hint.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6746747327" title="Mousio for macOS"><img alt="Mousio" height="52" src="https://wangchujiang.com/appicon/mousio.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6745227444" title="Musicer for macOS"><img alt="Musicer" height="52" src="https://wangchujiang.com/appicon/musicer.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6743841447" title="Audioer for macOS"><img alt="Audioer" height="52" src="https://wangchujiang.com/appicon/audioer.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6744690194" title="FileSentinel for macOS"><img alt="FileSentinel" height="52" src="https://wangchujiang.com/appicon/file-sentinel.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6743495172" title="FocusCursor for macOS"><img alt="FocusCursor" height="52" src="https://wangchujiang.com/appicon/focus-cursor.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6742680573" title="Videoer for macOS"><img alt="Videoer" height="52" src="https://wangchujiang.com/appicon/videoer.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6740425504" title="KeyClicker for macOS"><img alt="KeyClicker" height="52" src="https://wangchujiang.com/appicon/key-clicker.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6739052447" title="DayBar for macOS"><img alt="DayBar" height="52" src="https://wangchujiang.com/appicon/daybar.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6739444407" title="Iconed for macOS"><img alt="Iconed" height="52" src="https://wangchujiang.com/appicon/iconed.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6737160756" title="Menuist for macOS"><img alt="Menuist" height="52" src="https://wangchujiang.com/appicon/rightmenu-master.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6723903021" title="Paste Quick for macOS"><img alt="Quick RSS" height="52" src="https://wangchujiang.com/appicon/paste-quick.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6670696072&platform=mac" title="Quick RSS for macOS/iOS"><img alt="Quick RSS" height="52" src="https://wangchujiang.com/appicon/quick-rss.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6670167443" title="Web Serve for macOS"><img alt="Web Serve" height="52" src="https://wangchujiang.com/appicon/web-serve.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6503953628&platform=mac" title="Copybook Generator for macOS/iOS"><img alt="Copybook Generator" height="52" src="https://wangchujiang.com/appicon/copybook-generator.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6471227008&platform=mac" title="DevTutor for macOS/iOS"><img alt="DevTutor for SwiftUI" height="52" src="https://wangchujiang.com/appicon/devtutor.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6479819388&platform=mac" title="RegexMate for macOS/iOS"><img alt="RegexMate" height="52" src="https://wangchujiang.com/appicon/regex-mate.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6479194014&platform=mac" title="Time Passage for macOS/iOS"><img alt="Time Passage" height="52" src="https://wangchujiang.com/appicon/time-passage.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6478772538" title="IconizeFolder for macOS"><img alt="Iconize Folder" height="52" src="https://wangchujiang.com/appicon/iconize-folder.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6478511402&platform=mac" title="Textsound Saver for macOS/iOS"><img alt="Textsound Saver" height="52" src="https://wangchujiang.com/appicon/textsound-saver.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6476924627" title="Create Custom Symbols for macOS"><img alt="Create Custom Symbols" height="52" src="https://wangchujiang.com/appicon/create-custom-symbols.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6476452351" title="DevHub for macOS"><img alt="DevHub" height="52" src="https://wangchujiang.com/appicon/devhub.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6476400184" title="Resume Revise for macOS"><img alt="Resume Revise" height="52" src="https://wangchujiang.com/appicon/resume-revise.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6472593276" title="Palette Genius for macOS"><img alt="Palette Genius" height="52" src="https://wangchujiang.com/appicon/palette-genius.png"></a>
  <a target="_blank" href="https://jaywcjlove.github.io/maslink/?id=6470879005" title="Symbol Scribe for macOS"><img alt="Symbol Scribe" height="52" src="https://wangchujiang.com/appicon/symbol-scribe.png"></a>
</div>
<hr>

@uiw/react-hr
===

[![Buy me a coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-ffdd00?logo=buy-me-a-coffee&logoColor=black)](https://jaywcjlove.github.io/#/sponsor)
[![Follow On X](https://img.shields.io/badge/Follow%20on%20X-333333?logo=x&logoColor=white)](https://x.com/jaywcjlove)
[![CI](https://github.com/uiwjs/react-hr/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-hr/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@uiw/react-hr.svg)](https://www.npmjs.com/package/@uiw/react-hr)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-hr/file/README.md)

React divider components built on the native \`<hr>\` element. The component renders every divider style from props, so consumers do not need to import a stylesheet.

## Install

\`\`\`bash
npm install @uiw/react-hr
\`\`\`

## Usage

\`\`\`tsx
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
\`\`\`

## Basic

\`\`\`jsx mdx:preview=0
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr />
      <Hr variant="solid" />
    </>
  );
}
\`\`\`

## Dotted

\`\`\`jsx mdx:preview=1
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dotted" />
      <Hr variant="dotted2" />
    </>
  );
}
\`\`\`

## Dashed

\`\`\`jsx mdx:preview=2
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dashed" />
      <Hr variant="dashed2" />
    </>
  );
}
\`\`\`

## Double

\`\`\`jsx mdx:preview=3
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="double" />;
}
\`\`\`

## Fixed Dash

Use \`dashedFilled\` and \`dashedOpen\` to control the visible and empty segments.

\`\`\`jsx mdx:preview=4
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
\`\`\`

## Fade Edges

\`\`\`jsx mdx:preview=5
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="edge-weak" />;
}
\`\`\`

## Twill

\`\`\`jsx mdx:preview=6
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="twill" />
      <Hr variant="twill-colorful" />
    </>
  );
}
\`\`\`

## Wavy And Shadow

\`\`\`jsx mdx:preview=7
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="wavy" />
      <Hr variant="shadow" />
    </>
  );
}
\`\`\`

## Center Decorations

\`\`\`jsx mdx:preview=8
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
\`\`\`

## Edge Decorations

\`\`\`jsx mdx:preview=9
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="space-square" />
      <Hr variant="double-arrow" />
    </>
  );
}
\`\`\`

## Content

\`\`\`jsx mdx:preview=10
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
\`\`\`

## Custom Colors

\`\`\`jsx mdx:preview=11
import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr color="#1677ff" />
      <Hr variant="dashed" accentColor="#fa541c" />
      <Hr variant="mid-circle" color="#52c41a" multiple />
      <Hr
        variant="solid-content"
        content="自定义颜色"
        color="#722ed1"
        accentColor="#722ed1"
      />
    </>
  );
}
\`\`\`

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| \`variant\` | \`HrVariant\` | \`solid\` | Divider style. |
| \`color\` | \`string\` | \`#d0d0d5\` | Primary line and decoration color. |
| \`accentColor\` | \`string\` | \`#a2a9b6\` | Accent color used by dotted, dashed, and twill variants. |
| \`content\` | \`string\` | \`undefined\` | Text for content variants. |
| \`multiple\` | \`boolean\` | \`false\` | Adds repeated center decorations for circle and square variants. |
| \`dashedFilled\` | \`number \\| string\` | \`4px\` | Filled segment length for \`dashed-fixed\`. |
| \`dashedOpen\` | \`number \\| string\` | \`6px\` | Empty segment length for \`dashed-fixed\`. |
| \`margin\` | \`number \\| string\` | \`1.25rem\` | Vertical divider margin. |

All native \`<hr>\` attributes are supported except \`children\`.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-hr/graphs/contributors">
  <img src="https://uiwjs.github.io/react-hr/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
`,oe=[K,Q,G,X,J,Y,Z,ee,te,ae,re,ne],se=[`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr />
      <Hr variant="solid" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dotted" />
      <Hr variant="dotted2" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dashed" />
      <Hr variant="dashed2" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="double" />;
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="dashed-fixed" />
      <Hr variant="dashed-fixed" dashedFilled={6} dashedOpen={5} />
      <Hr variant="dashed-fixed" dashedFilled={12} dashedOpen={4} />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return <Hr variant="edge-weak" />;
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="twill" />
      <Hr variant="twill-colorful" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="wavy" />
      <Hr variant="shadow" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="mid-circle" />
      <Hr variant="mid-square" />
      <Hr variant="mid-circle" multiple />
      <Hr variant="mid-square" multiple />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="space-square" />
      <Hr variant="double-arrow" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr variant="solid-content" content="分隔线" />
      <Hr variant="dashed-content" content="虚线内容" />
      <Hr variant="fade-content" content="两端淡出" />
      <Hr variant="mid-border-content" content="边框内容" />
    </>
  );
}`,`import { Hr } from '@uiw/react-hr';

export default function Example() {
  return (
    <>
      <Hr color="#1677ff" />
      <Hr variant="dashed" accentColor="#fa541c" />
      <Hr variant="mid-circle" color="#52c41a" multiple />
      <Hr
        variant="solid-content"
        content="自定义颜色"
        color="#722ed1"
        accentColor="#722ed1"
      />
    </>
  );
}`];const u=document,v="_dark_mode_theme_",$="permanent",M="colorschemechange",ce="permanentcolorscheme",d="light",m="dark",C=(a,t,r=t)=>{Object.defineProperty(a,r,{enumerable:!0,get(){const i=this.getAttribute(t);return i===null?"":i},set(i){this.setAttribute(t,i)}})},le=(a,t,r=t)=>{Object.defineProperty(a,r,{enumerable:!0,get(){return this.hasAttribute(t)},set(i){i?this.setAttribute(t,""):this.removeAttribute(t)}})};class de extends HTMLElement{static get observedAttributes(){return["mode",d,m,$]}LOCAL_NANE=v;constructor(){super(),this.t()}connectedCallback(){C(this,"mode"),C(this,m),C(this,d),le(this,$);const t=localStorage.getItem(v);t&&[d,m].includes(t)&&(this.mode=t,this.permanent=!0),this.permanent&&!t&&localStorage.setItem(v,this.mode);const r=[d,m].includes(t);this.permanent&&t?this.o():(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.mode=m,this.o()),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(this.mode=d,this.o())),!this.permanent&&!r&&(window.matchMedia("(prefers-color-scheme: light)").onchange=n=>{this.mode=n.matches?d:m,this.o()},window.matchMedia("(prefers-color-scheme: dark)").onchange=n=>{this.mode=n.matches?m:d,this.o()}),new MutationObserver(((n,o)=>{this.mode=u.documentElement.dataset.colorMode,this.permanent&&r&&(localStorage.setItem(v,this.mode),this.i(ce,{permanent:this.permanent})),this.h(),this.i(M,{colorScheme:this.mode})})).observe(u.documentElement,{attributes:!0}),this.i(M,{colorScheme:this.mode}),this.h()}attributeChangedCallback(t,r,i){if(t==="mode"&&r!==i&&[d,m].includes(i)){const n=localStorage.getItem(v);this.mode===n?(this.mode=i,this.h(),this.o()):this.mode&&this.mode!==n&&(this.h(),this.o())}else(t===d||t===m)&&r!==i&&this.h();t==="permanent"&&typeof this.permanent=="boolean"&&(this.permanent?localStorage.setItem(v,this.mode):localStorage.removeItem(v))}o(){u.documentElement.setAttribute("data-color-mode",this.mode)}h(){this.icon.textContent=this.mode===d?"🌒":"🌞",this.text.textContent=this.mode===d?this.getAttribute(m):this.getAttribute(d),!this.text.textContent&&this.text.parentElement&&this.text&&this.text.parentElement.removeChild(this.text)}t(){var t=this.attachShadow({mode:"open"});this.label=u.createElement("span"),this.label.setAttribute("class","wrapper"),this.label.onclick=()=>{this.mode=this.mode===d?m:d,this.permanent&&localStorage.setItem(v,this.mode),this.o(),this.h()},t.appendChild(this.label),this.icon=u.createElement("span"),this.icon.part="icon",this.label.appendChild(this.icon),this.text=u.createElement("span"),this.text.part="text",this.label.appendChild(this.text);const r=`
[data-color-mode*='dark'], [data-color-mode*='dark'] body {
  color-scheme: dark;
  --color-theme-bg: #0d1117;
  --color-theme-text: #c9d1d9;
  background-color: var(--color-theme-bg);
  color: var(--color-theme-text);
}

[data-color-mode*='light'], [data-color-mode*='light'] body {
  color-scheme: light;
  --color-theme-bg: #fff;
  --color-theme-text: #24292f;
  background-color: var(--color-theme-bg);
  color: var(--color-theme-text);
}`,i="_dark_mode_style_";if(!u.getElementById(i)){var o=u.createElement("style");o.id=i,o.textContent=r,u.head.appendChild(o)}var c=u.createElement("style");c.textContent=`
    .wrapper { cursor: pointer; user-select: none; position: relative; }
    .wrapper > span + span { margin-left: .4rem; }
    `,t.appendChild(c)}i(t,r){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:r}))}}customElements.define("dark-mode",de);var he={},O=k.createContext({}),pe=(a,t)=>f({},a,t),me=a=>{var{children:t,value:r}=a,[i,n]=k.useReducer(pe,f({},he,r));return e.jsx(O.Provider,{value:f({},i,{dispatch:n}),children:t})},ue=["tagName","className","children"],A=g.forwardRef((a,t)=>{var{tagName:r="div",className:i,children:n}=a,o=H(a,ue),c=[j+"-code",i].filter(Boolean).join(" ").trim(),p=k.useContext(O);if(p.collapse)return null;var h=a.href&&typeof r=="string"?"a":r,l=f({},o,{className:c,ref:t});return g.createElement(h,l,n)});A.displayName="uiw.CodeLayoutCode";var ge=["className","children"],F=g.forwardRef((a,t)=>{var{className:r,children:i}=a,n=H(a,ge),o=[j+"-preview",r].filter(Boolean).join(" ").trim();return e.jsx("div",f({},n,{className:o,ref:t,children:i}))});F.displayName="uiw.Preview";var xe=a=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41zm13.14 6.14-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z","data-name":"code"})}),fe=a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("path",{d:"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"}),e.jsx("path",{d:"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z"})]}),ve=a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"green",children:[e.jsx("path",{d:"M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"}),e.jsx("path",{d:"M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"})]}),be=a=>{var[t,r]=k.useState(!1),i=()=>{r(!0),R(a.text||"",()=>{var n=setTimeout(()=>{r(!1),clearTimeout(n)},2e3)})};return e.jsx("button",{onClick:i,children:t?e.jsx(ve,{}):e.jsx(fe,{})})},we=["className","children","extra","text","copied","collapse","visibleButton","visible"],T=g.forwardRef((a,t)=>{var{className:r,children:i,extra:n,text:o="",copied:c=!0,collapse:p=!0,visibleButton:h=!0,visible:l=!0}=a,x=H(a,we),w=k.useContext(O),S=[j+"-toolbar",r].filter(Boolean).join(" ").trim();if(k.useEffect(()=>w.dispatch({collapse:p}),[p]),!l)return null;var y=()=>w.dispatch({collapse:!w.collapse});return e.jsxs("div",f({className:S},x,{ref:t,children:[e.jsx("div",{className:j+"-title",children:i}),e.jsxs("div",{className:j+"-extra",children:[n,c&&e.jsx(be,{text:o}),h&&e.jsx("button",{onClick:y,children:e.jsx(xe,{})})]})]}))});T.displayName="uiw.Toolbar";var je=["children","prefixCls","className","bordered","disableCheckered"],j="w-rcpl",ke=g.forwardRef((a,t)=>{var{children:r,prefixCls:i=j,className:n,bordered:o=!0,disableCheckered:c}=a,p=H(a,je),h=[i,n,o?"w-bordered":null,c?"w-disable-checkered":null].filter(Boolean).join(" ").trim();return e.jsx("div",f({ref:t},p,{className:h,children:g.Children.map(r,(l,x)=>g.isValidElement(l)?g.cloneElement(l,f({},l.props,{key:x})):l)}))}),ye=g.forwardRef((a,t)=>e.jsx(me,{value:{collapse:!1},children:e.jsx(ke,f({},a,{ref:t}))})),b=ye;b.Preview=F;b.Toolbar=T;b.Code=A;const He=b.Preview,Se=b.Code,Ee=b.Toolbar;function Ce({inline:a,className:t,children:r,node:i,...n}){const o=/language-(\w+)/.exec(t||"")?.[1],c=i?.data?.meta??i?.meta??"",p=String(c).match(/mdx:preview=(\d+)/),h=p?Number(p[1]):-1,l=!a&&o&&["jsx","tsx"].includes(o)&&h>=0?oe[h]:null,x=h>=0?se[h]:"";return l?e.jsxs(b,{disableCheckered:!0,style:{marginBottom:18},children:[e.jsx(He,{children:e.jsx(l,{})}),e.jsx(Ee,{text:x,"data-code":x,children:"Example"}),e.jsx(Se,{children:e.jsx("code",{className:t,children:r})})]}):e.jsx("code",{className:t,...n,children:r})}function Oe(){return e.jsxs("main",{className:"site-shell",children:[e.jsx("dark-mode",{permanent:!0,light:"Light",dark:"Dark"}),e.jsx(N,{source:ie,components:{code:Ce}})]})}const _e=document.getElementById("root"),$e=globalThis.__reactHrRoot??=B.createRoot(_e);$e.render(e.jsx(g.StrictMode,{children:e.jsx(Oe,{})}));
