import{j as t,r as k,R as f,c as B}from"./react-vendor-vCJmeiA8.js";import{_ as y,a as x,c as R,M as N}from"./markdown-vendor-Fd3-s8jc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const M=document.createElement("template");M.innerHTML=`
<style>
:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }
@keyframes octocat-wave {
  0%, 100% { transform: rotate(0); }
  20%, 60% { transform: rotate(-25deg); }
  40%, 80% { transform: rotate(10deg); }
}
@media (max-width:500px) {
  :host a:hover .octo-arm { animation: none; }
  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }
}
:host svg {
  z-index: 99;
  position: fixed;
  border: 0px;
  top: 0px;
}
</style>
<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">
  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">
    <g>
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
    </g>
  </a>
</svg>
`;class z extends HTMLElement{static get observedAttributes(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}constructor(){super(),this.right="0",this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(this.ownerDocument.importNode(M.content,!0)),this.update()}setAttr(e,a){const n=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?n.lastElementChild.setAttribute("xlink:href",a):/(color|fill)/.test(e.toLocaleLowerCase())?n.firstElementChild.style[e]=a:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?n.style[e]=a:n.setAttribute(e,a)}update(){[...this.getAttributeNames(),"right"].forEach(e=>{const a=this.getAttribute(e)||this[e]||"";this.setAttr(e,a)})}attributeChangedCallback(e,a,n){a!==n&&this.setAttr(e,n)}}customElements.define("github-corners",z);var D=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function q(r){var{size:e=80,fixed:a=!1,bottom:n,zIndex:i,style:o,bgColor:c="#151513",color:m="#fff",position:l="right"}=r,d=y(r,D),h=l==="left"?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return n?(h.bottom=0,h.top="initial",h.transform=l==="left"?"scale(-1, -1)":"scale(1, -1)"):(h.bottom="initial",h.top=0),t.jsx("github-corners",x({target:"__blank",width:e,height:e,href:r.href,position:a?"fixed":"absolute","z-index":i,style:o,fill:c,color:m},h,d))}const V="#d0d0d5",U="#a2a9b6",W="1.25rem",S=(r,e)=>typeof r=="number"?`${r}px`:r??e,G=r=>`url("data:image/svg+xml,${encodeURIComponent(r)}")`,K=r=>G(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><path d="M0 4 Q4 0 8 4 T16 4" fill="none" stroke="${r}" stroke-width="1.4"/></svg>`),Q=(r,e)=>[...(e?["calc(50% - 24px)","50%","calc(50% + 24px)"]:["50%"]).map(n=>`linear-gradient(45deg, transparent calc(50% - 5px), ${r} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) ${n} 50% / 12px 12px no-repeat`),`linear-gradient(${r}, ${r}) center / 100% 1px no-repeat`].join(", "),X=(r,e)=>[...(e?["calc(50% - 24px)","50%","calc(50% + 24px)"]:["50%"]).map(n=>`radial-gradient(circle at center, ${r} 0 6px, transparent 6.5px) ${n} 50% / 14px 14px no-repeat`),`linear-gradient(${r}, ${r}) center / 100% 1px no-repeat`].join(", ");function s({variant:r="solid",color:e=V,accentColor:a=U,content:n,multiple:i,dashedFilled:o,dashedOpen:c,margin:m,style:l,...d}){const h=S(m,W),w=S(o,"4px"),H=S(c,"6px"),C={boxSizing:"border-box",border:0,height:"inherit",backgroundColor:"initial",margin:`${h} 0`},L={solid:{borderTop:`1px solid ${e}`},dotted:{borderTop:`1px dotted ${a}`},dotted2:{borderTop:`2px dotted ${a}`},dashed:{borderTop:`1px dashed ${a}`},dashed2:{borderTop:`2px dashed ${a}`},double:{borderTop:`3px double ${e}`},"dashed-fixed":{height:1,background:`repeating-linear-gradient(to right, ${a} 0 ${w}, transparent 0 calc(${w} + ${H}))`},"edge-weak":{height:1,background:`linear-gradient(to right, transparent, ${e}, transparent)`},twill:{height:6,background:`repeating-linear-gradient(135deg, ${a} 0px, ${a} 1px, transparent 1px, transparent 6px)`},"twill-colorful":{height:6,background:"linear-gradient(135deg, red, orange, green, blue, purple)",WebkitMaskImage:"repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)",maskImage:"repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)"},wavy:{height:8,backgroundImage:K(e),backgroundRepeat:"repeat-x",backgroundPosition:"center",backgroundSize:"16px 8px"},shadow:{borderTop:"1px solid rgb(0 0 0 / 10%)",boxShadow:`inset 0 10px 10px -10px ${e}`,paddingTop:10},"mid-circle":{height:14,background:X(e,i)},"mid-square":{height:16,background:Q(e,i)},"space-square":{height:16,background:[`linear-gradient(45deg, transparent calc(50% - 5px), ${e} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) left 50% / 12px 12px no-repeat`,`linear-gradient(45deg, transparent calc(50% - 5px), ${e} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) right 50% / 12px 12px no-repeat`,`linear-gradient(${e}, ${e}) center / calc(100% - 32px) 1px no-repeat`].join(", ")},"double-arrow":{height:10,marginLeft:20,marginRight:20,background:[`linear-gradient(45deg, transparent 0 5px, ${e} 5px 7px, transparent 7px) left center / 12px 12px no-repeat`,`linear-gradient(225deg, transparent 0 5px, ${e} 5px 7px, transparent 7px) right center / 12px 12px no-repeat`,`linear-gradient(${e}, ${e}) center calc(50% - 2px) / 100% 1px no-repeat`,`linear-gradient(${e}, ${e}) center calc(50% + 2px) / 100% 1px no-repeat`].join(", ")},"solid-content":{},"dashed-content":{},"fade-content":{},"mid-border-content":{}};if(r.endsWith("content")){const O={...C,flex:1,margin:0,borderTop:r==="dashed-content"?`1px dashed ${e}`:r==="fade-content"?0:`1px solid ${e}`,height:r==="fade-content"?1:void 0,background:r==="fade-content"?`linear-gradient(to right, transparent, ${e}, transparent)`:void 0,...l},P={color:r==="mid-border-content"?"transparent":a,border:r==="mid-border-content"?`1px solid ${e}`:void 0,padding:r==="mid-border-content"?"4px 1ch":"0 1ch",fontSize:12,lineHeight:"1.2",whiteSpace:"nowrap"};return t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:0,margin:`${h} 0`,width:"100%"},children:[t.jsx("hr",{...d,style:O}),t.jsx("span",{"aria-hidden":"true",style:P,children:n}),t.jsx("hr",{"aria-hidden":"true",style:O})]})}return t.jsx("hr",{...d,style:{...C,...L[r],...l}})}function Z(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),t.jsx(s,{variant:"solid"})]})}function J(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"dotted"}),t.jsx(s,{variant:"dotted2"})]})}function Y(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"dashed"}),t.jsx(s,{variant:"dashed2"})]})}function ee(){return t.jsx(s,{variant:"double"})}function te(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"dashed-fixed"}),t.jsx(s,{variant:"dashed-fixed",dashedFilled:6,dashedOpen:5}),t.jsx(s,{variant:"dashed-fixed",dashedFilled:12,dashedOpen:4})]})}function re(){return t.jsx(s,{variant:"edge-weak"})}function ae(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"twill"}),t.jsx(s,{variant:"twill-colorful"})]})}function ne(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"wavy"}),t.jsx(s,{variant:"shadow"})]})}function ie(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"mid-circle"}),t.jsx(s,{variant:"mid-square"}),t.jsx(s,{variant:"mid-circle",multiple:!0}),t.jsx(s,{variant:"mid-square",multiple:!0})]})}function oe(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"space-square"}),t.jsx(s,{variant:"double-arrow"})]})}function se(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"solid-content",content:"分隔线"}),t.jsx(s,{variant:"dashed-content",content:"虚线内容"}),t.jsx(s,{variant:"fade-content",content:"两端淡出"}),t.jsx(s,{variant:"mid-border-content",content:"边框内容"})]})}function ce(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{color:"#1677ff"}),t.jsx(s,{variant:"dashed",accentColor:"#fa541c"}),t.jsx(s,{variant:"mid-circle",color:"#52c41a",multiple:!0}),t.jsx(s,{variant:"solid-content",content:"自定义颜色",color:"#722ed1",accentColor:"#722ed1"})]})}const le=`<div markdown="1">
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
`,de=[Z,J,Y,ee,te,re,ae,ne,ie,oe,se,ce],he=[`import { Hr } from '@uiw/react-hr';

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
}`];const g=document,v="_dark_mode_theme_",$="permanent",A="colorschemechange",pe="permanentcolorscheme",p="light",u="dark",E=(r,e,a=e)=>{Object.defineProperty(r,a,{enumerable:!0,get(){const n=this.getAttribute(e);return n===null?"":n},set(n){this.setAttribute(e,n)}})},me=(r,e,a=e)=>{Object.defineProperty(r,a,{enumerable:!0,get(){return this.hasAttribute(e)},set(n){n?this.setAttribute(e,""):this.removeAttribute(e)}})};class ue extends HTMLElement{static get observedAttributes(){return["mode",p,u,$]}LOCAL_NANE=v;constructor(){super(),this.t()}connectedCallback(){E(this,"mode"),E(this,u),E(this,p),me(this,$);const e=localStorage.getItem(v);e&&[p,u].includes(e)&&(this.mode=e,this.permanent=!0),this.permanent&&!e&&localStorage.setItem(v,this.mode);const a=[p,u].includes(e);this.permanent&&e?this.o():(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.mode=u,this.o()),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(this.mode=p,this.o())),!this.permanent&&!a&&(window.matchMedia("(prefers-color-scheme: light)").onchange=i=>{this.mode=i.matches?p:u,this.o()},window.matchMedia("(prefers-color-scheme: dark)").onchange=i=>{this.mode=i.matches?u:p,this.o()}),new MutationObserver(((i,o)=>{this.mode=g.documentElement.dataset.colorMode,this.permanent&&a&&(localStorage.setItem(v,this.mode),this.i(pe,{permanent:this.permanent})),this.h(),this.i(A,{colorScheme:this.mode})})).observe(g.documentElement,{attributes:!0}),this.i(A,{colorScheme:this.mode}),this.h()}attributeChangedCallback(e,a,n){if(e==="mode"&&a!==n&&[p,u].includes(n)){const i=localStorage.getItem(v);this.mode===i?(this.mode=n,this.h(),this.o()):this.mode&&this.mode!==i&&(this.h(),this.o())}else(e===p||e===u)&&a!==n&&this.h();e==="permanent"&&typeof this.permanent=="boolean"&&(this.permanent?localStorage.setItem(v,this.mode):localStorage.removeItem(v))}o(){g.documentElement.setAttribute("data-color-mode",this.mode)}h(){this.icon.textContent=this.mode===p?"🌒":"🌞",this.text.textContent=this.mode===p?this.getAttribute(u):this.getAttribute(p),!this.text.textContent&&this.text.parentElement&&this.text&&this.text.parentElement.removeChild(this.text)}t(){var e=this.attachShadow({mode:"open"});this.label=g.createElement("span"),this.label.setAttribute("class","wrapper"),this.label.onclick=()=>{this.mode=this.mode===p?u:p,this.permanent&&localStorage.setItem(v,this.mode),this.o(),this.h()},e.appendChild(this.label),this.icon=g.createElement("span"),this.icon.part="icon",this.label.appendChild(this.icon),this.text=g.createElement("span"),this.text.part="text",this.label.appendChild(this.text);const a=`
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
}`,n="_dark_mode_style_";if(!g.getElementById(n)){var o=g.createElement("style");o.id=n,o.textContent=a,g.head.appendChild(o)}var c=g.createElement("style");c.textContent=`
    .wrapper { cursor: pointer; user-select: none; position: relative; }
    .wrapper > span + span { margin-left: .4rem; }
    `,e.appendChild(c)}i(e,a){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:a}))}}customElements.define("dark-mode",ue);var ge={},_=k.createContext({}),fe=(r,e)=>x({},r,e),xe=r=>{var{children:e,value:a}=r,[n,i]=k.useReducer(fe,x({},ge,a));return t.jsx(_.Provider,{value:x({},n,{dispatch:i}),children:e})},ve=["tagName","className","children"],T=f.forwardRef((r,e)=>{var{tagName:a="div",className:n,children:i}=r,o=y(r,ve),c=[j+"-code",n].filter(Boolean).join(" ").trim(),m=k.useContext(_);if(m.collapse)return null;var l=r.href&&typeof a=="string"?"a":a,d=x({},o,{className:c,ref:e});return f.createElement(l,d,i)});T.displayName="uiw.CodeLayoutCode";var be=["className","children"],F=f.forwardRef((r,e)=>{var{className:a,children:n}=r,i=y(r,be),o=[j+"-preview",a].filter(Boolean).join(" ").trim();return t.jsx("div",x({},i,{className:o,ref:e,children:n}))});F.displayName="uiw.Preview";var we=r=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41zm13.14 6.14-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z","data-name":"code"})}),je=r=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[t.jsx("path",{d:"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"}),t.jsx("path",{d:"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z"})]}),ke=r=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"green",children:[t.jsx("path",{d:"M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"}),t.jsx("path",{d:"M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"})]}),ye=r=>{var[e,a]=k.useState(!1),n=()=>{a(!0),R(r.text||"",()=>{var i=setTimeout(()=>{a(!1),clearTimeout(i)},2e3)})};return t.jsx("button",{onClick:n,children:e?t.jsx(ke,{}):t.jsx(je,{})})},Ce=["className","children","extra","text","copied","collapse","visibleButton","visible"],I=f.forwardRef((r,e)=>{var{className:a,children:n,extra:i,text:o="",copied:c=!0,collapse:m=!0,visibleButton:l=!0,visible:d=!0}=r,h=y(r,Ce),w=k.useContext(_),H=[j+"-toolbar",a].filter(Boolean).join(" ").trim();if(k.useEffect(()=>w.dispatch({collapse:m}),[m]),!d)return null;var C=()=>w.dispatch({collapse:!w.collapse});return t.jsxs("div",x({className:H},h,{ref:e,children:[t.jsx("div",{className:j+"-title",children:n}),t.jsxs("div",{className:j+"-extra",children:[i,c&&t.jsx(ye,{text:o}),l&&t.jsx("button",{onClick:C,children:t.jsx(we,{})})]})]}))});I.displayName="uiw.Toolbar";var He=["children","prefixCls","className","bordered","disableCheckered"],j="w-rcpl",Se=f.forwardRef((r,e)=>{var{children:a,prefixCls:n=j,className:i,bordered:o=!0,disableCheckered:c}=r,m=y(r,He),l=[n,i,o?"w-bordered":null,c?"w-disable-checkered":null].filter(Boolean).join(" ").trim();return t.jsx("div",x({ref:e},m,{className:l,children:f.Children.map(a,(d,h)=>f.isValidElement(d)?f.cloneElement(d,x({},d.props,{key:h})):d)}))}),Ee=f.forwardRef((r,e)=>t.jsx(xe,{value:{collapse:!1},children:t.jsx(Se,x({},r,{ref:e}))})),b=Ee;b.Preview=F;b.Toolbar=I;b.Code=T;const _e=b.Preview,Oe=b.Code,$e=b.Toolbar;function Ae({inline:r,className:e,children:a,node:n,...i}){const o=/language-(\w+)/.exec(e||"")?.[1],c=n?.data?.meta??n?.meta??"",m=String(c).match(/mdx:preview=(\d+)/),l=m?Number(m[1]):-1,d=!r&&o&&["jsx","tsx"].includes(o)&&l>=0?de[l]:null,h=l>=0?he[l]:"";return d?t.jsxs(b,{disableCheckered:!0,style:{marginBottom:18},children:[t.jsx(_e,{children:t.jsx(d,{})}),t.jsx($e,{text:h,"data-code":h,children:"Example"}),t.jsx(Oe,{children:t.jsx("code",{className:e,children:a})})]}):t.jsx("code",{className:e,...i,children:a})}function Me(){return t.jsxs("main",{className:"site-shell",children:[t.jsx(q,{fixed:!0,target:"__blank",zIndex:99999,href:"https://github.com/uiwjs/react-hr"}),t.jsx("dark-mode",{permanent:!0,light:"Light",dark:"Dark"}),t.jsx(N,{source:le,components:{code:Ae}})]})}const Te=document.getElementById("root"),Fe=globalThis.__reactHrRoot??=B.createRoot(Te);Fe.render(t.jsx(f.StrictMode,{children:t.jsx(Me,{})}));
