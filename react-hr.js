import { jsxs as k, jsx as a } from "react/jsx-runtime";
const f = "#d0d0d5", w = "#a2a9b6", y = "1.25rem", p = (n, e) => typeof n == "number" ? `${n}px` : n ?? e, T = (n) => `url("data:image/svg+xml,${encodeURIComponent(n)}")`, S = (n) => T(
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><path d="M0 4 Q4 0 8 4 T16 4" fill="none" stroke="${n}" stroke-width="1.4"/></svg>`
), j = (n, e) => [
  ...(e ? ["calc(50% - 24px)", "50%", "calc(50% + 24px)"] : ["50%"]).map(
    (r) => `linear-gradient(45deg, transparent calc(50% - 5px), ${n} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) ${r} 50% / 12px 12px no-repeat`
  ),
  `linear-gradient(${n}, ${n}) center / 100% 1px no-repeat`
].join(", "), B = (n, e) => [
  ...(e ? ["calc(50% - 24px)", "50%", "calc(50% + 24px)"] : ["50%"]).map((r) => `radial-gradient(circle at center, ${n} 0 6px, transparent 6.5px) ${r} 50% / 14px 14px no-repeat`),
  `linear-gradient(${n}, ${n}) center / 100% 1px no-repeat`
].join(", ");
function M({
  variant: n = "solid",
  color: e = f,
  accentColor: t = w,
  content: r,
  multiple: d,
  dashedFilled: l,
  dashedOpen: h,
  margin: b,
  style: i,
  ...g
}) {
  const s = p(b, y), x = p(l, "4px"), $ = p(h, "6px"), c = {
    boxSizing: "border-box",
    border: 0,
    margin: `${s} 0`
  }, u = {
    solid: {
      borderTop: `1px solid ${e}`
    },
    dotted: {
      borderTop: `1px dotted ${t}`
    },
    dotted2: {
      borderTop: `2px dotted ${t}`
    },
    dashed: {
      borderTop: `1px dashed ${t}`
    },
    dashed2: {
      borderTop: `2px dashed ${t}`
    },
    double: {
      borderTop: `3px double ${e}`
    },
    "dashed-fixed": {
      height: 1,
      background: `repeating-linear-gradient(to right, ${t} 0 ${x}, transparent 0 calc(${x} + ${$}))`
    },
    "edge-weak": {
      height: 1,
      background: `linear-gradient(to right, transparent, ${e}, transparent)`
    },
    twill: {
      height: 6,
      background: `repeating-linear-gradient(135deg, ${t} 0px, ${t} 1px, transparent 1px, transparent 6px)`
    },
    "twill-colorful": {
      height: 6,
      background: "linear-gradient(135deg, red, orange, green, blue, purple)",
      WebkitMaskImage: "repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)",
      maskImage: "repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)"
    },
    wavy: {
      height: 8,
      backgroundImage: S(e),
      backgroundRepeat: "repeat-x",
      backgroundPosition: "center",
      backgroundSize: "16px 8px"
    },
    shadow: {
      borderTop: "1px solid rgb(0 0 0 / 10%)",
      boxShadow: `inset 0 10px 10px -10px ${e}`,
      paddingTop: 10
    },
    "mid-circle": {
      height: 14,
      background: B(e, d)
    },
    "mid-square": {
      height: 16,
      background: j(e, d)
    },
    "space-square": {
      height: 16,
      background: [
        `linear-gradient(45deg, transparent calc(50% - 5px), ${e} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) left 50% / 12px 12px no-repeat`,
        `linear-gradient(45deg, transparent calc(50% - 5px), ${e} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) right 50% / 12px 12px no-repeat`,
        `linear-gradient(${e}, ${e}) center / calc(100% - 32px) 1px no-repeat`
      ].join(", ")
    },
    "double-arrow": {
      height: 10,
      marginLeft: 20,
      marginRight: 20,
      background: [
        `linear-gradient(45deg, transparent 0 5px, ${e} 5px 7px, transparent 7px) left center / 12px 12px no-repeat`,
        `linear-gradient(225deg, transparent 0 5px, ${e} 5px 7px, transparent 7px) right center / 12px 12px no-repeat`,
        `linear-gradient(${e}, ${e}) center calc(50% - 2px) / 100% 1px no-repeat`,
        `linear-gradient(${e}, ${e}) center calc(50% + 2px) / 100% 1px no-repeat`
      ].join(", ")
    },
    "solid-content": {},
    "dashed-content": {},
    "fade-content": {},
    "mid-border-content": {}
  };
  if (n.endsWith("content")) {
    const o = {
      ...c,
      flex: 1,
      margin: 0,
      borderTop: n === "dashed-content" ? `1px dashed ${e}` : n === "fade-content" ? 0 : `1px solid ${e}`,
      height: n === "fade-content" ? 1 : void 0,
      background: n === "fade-content" ? `linear-gradient(to right, transparent, ${e}, transparent)` : void 0,
      ...i
    }, m = {
      color: n === "mid-border-content" ? "transparent" : t,
      border: n === "mid-border-content" ? `1px solid ${e}` : void 0,
      padding: n === "mid-border-content" ? "4px 1ch" : "0 1ch",
      fontSize: 12,
      lineHeight: "1.2",
      whiteSpace: "nowrap"
    };
    return /* @__PURE__ */ k(
      "span",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 0,
          margin: `${s} 0`,
          width: "100%"
        },
        children: [
          /* @__PURE__ */ a("hr", { ...g, style: o }),
          /* @__PURE__ */ a("span", { "aria-hidden": "true", style: m, children: r }),
          /* @__PURE__ */ a("hr", { "aria-hidden": "true", style: o })
        ]
      }
    );
  }
  return /* @__PURE__ */ a("hr", { ...g, style: { ...c, ...u[n], ...i } });
}
export {
  M as Hr
};
