import type { CSSProperties, HTMLAttributes } from 'react';

export type HrVariant =
  | 'solid'
  | 'dotted'
  | 'dotted2'
  | 'dashed'
  | 'dashed2'
  | 'double'
  | 'dashed-fixed'
  | 'edge-weak'
  | 'twill'
  | 'twill-colorful'
  | 'wavy'
  | 'shadow'
  | 'mid-circle'
  | 'mid-square'
  | 'space-square'
  | 'double-arrow'
  | 'solid-content'
  | 'dashed-content'
  | 'fade-content'
  | 'mid-border-content';

export interface HrProps extends Omit<HTMLAttributes<HTMLHRElement>, 'children' | 'color'> {
  variant?: HrVariant;
  color?: string;
  accentColor?: string;
  content?: string;
  multiple?: boolean;
  dashedFilled?: number | string;
  dashedOpen?: number | string;
  margin?: number | string;
}

const defaultColor = '#d0d0d5';
const defaultAccentColor = '#a2a9b6';
const defaultMargin = '1.25rem';

const toCssLength = (value: number | string | undefined, fallback: string) => {
  if (typeof value === 'number') return `${value}px`;
  return value ?? fallback;
};

const svgData = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const wavyBackground = (color: string) =>
  svgData(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><path d="M0 4 Q4 0 8 4 T16 4" fill="none" stroke="${color}" stroke-width="1.4"/></svg>`
  );

const squareBackground = (color: string, multiple?: boolean) => {
  const centers = multiple ? ['calc(50% - 24px)', '50%', 'calc(50% + 24px)'] : ['50%'];
  return [
    ...centers.map(
      (center) =>
        `linear-gradient(45deg, transparent calc(50% - 5px), ${color} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) ${center} 50% / 12px 12px no-repeat`
    ),
    `linear-gradient(${color}, ${color}) center / 100% 1px no-repeat`
  ].join(', ');
};

const circleBackground = (color: string, multiple?: boolean) => {
  const centers = multiple ? ['calc(50% - 24px)', '50%', 'calc(50% + 24px)'] : ['50%'];
  return [
    ...centers.map((center) => `radial-gradient(circle at center, ${color} 0 6px, transparent 6.5px) ${center} 50% / 14px 14px no-repeat`),
    `linear-gradient(${color}, ${color}) center / 100% 1px no-repeat`
  ].join(', ');
};

export function Hr({
  variant = 'solid',
  color = defaultColor,
  accentColor = defaultAccentColor,
  content,
  multiple,
  dashedFilled,
  dashedOpen,
  margin,
  style,
  ...rest
}: HrProps) {
  const blockMargin = toCssLength(margin, defaultMargin);
  const filled = toCssLength(dashedFilled, '4px');
  const open = toCssLength(dashedOpen, '6px');
  const baseStyle: CSSProperties = {
    boxSizing: 'border-box',
    border: 0,
    height: 'inherit',
    backgroundColor: 'initial',
    margin: `${blockMargin} 0`
  };

  const styleByVariant: Record<HrVariant, CSSProperties> = {
    solid: {
      borderTop: `1px solid ${color}`
    },
    dotted: {
      borderTop: `1px dotted ${accentColor}`
    },
    dotted2: {
      borderTop: `2px dotted ${accentColor}`
    },
    dashed: {
      borderTop: `1px dashed ${accentColor}`
    },
    dashed2: {
      borderTop: `2px dashed ${accentColor}`
    },
    double: {
      borderTop: `3px double ${color}`
    },
    'dashed-fixed': {
      height: 1,
      background: `repeating-linear-gradient(to right, ${accentColor} 0 ${filled}, transparent 0 calc(${filled} + ${open}))`
    },
    'edge-weak': {
      height: 1,
      background: `linear-gradient(to right, transparent, ${color}, transparent)`
    },
    twill: {
      height: 6,
      background: `repeating-linear-gradient(135deg, ${accentColor} 0px, ${accentColor} 1px, transparent 1px, transparent 6px)`
    },
    'twill-colorful': {
      height: 6,
      background: 'linear-gradient(135deg, red, orange, green, blue, purple)',
      WebkitMaskImage: 'repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)',
      maskImage: 'repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px)'
    },
    wavy: {
      height: 8,
      backgroundImage: wavyBackground(color),
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'center',
      backgroundSize: '16px 8px'
    },
    shadow: {
      borderTop: '1px solid rgb(0 0 0 / 10%)',
      boxShadow: `inset 0 10px 10px -10px ${color}`,
      paddingTop: 10
    },
    'mid-circle': {
      height: 14,
      background: circleBackground(color, multiple)
    },
    'mid-square': {
      height: 16,
      background: squareBackground(color, multiple)
    },
    'space-square': {
      height: 16,
      background: [
        `linear-gradient(45deg, transparent calc(50% - 5px), ${color} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) left 50% / 12px 12px no-repeat`,
        `linear-gradient(45deg, transparent calc(50% - 5px), ${color} calc(50% - 5px) calc(50% + 5px), transparent calc(50% + 5px)) right 50% / 12px 12px no-repeat`,
        `linear-gradient(${color}, ${color}) center / calc(100% - 32px) 1px no-repeat`
      ].join(', ')
    },
    'double-arrow': {
      height: 10,
      marginLeft: 20,
      marginRight: 20,
      background: [
        `linear-gradient(45deg, transparent 0 5px, ${color} 5px 7px, transparent 7px) left center / 12px 12px no-repeat`,
        `linear-gradient(225deg, transparent 0 5px, ${color} 5px 7px, transparent 7px) right center / 12px 12px no-repeat`,
        `linear-gradient(${color}, ${color}) center calc(50% - 2px) / 100% 1px no-repeat`,
        `linear-gradient(${color}, ${color}) center calc(50% + 2px) / 100% 1px no-repeat`
      ].join(', ')
    },
    'solid-content': {},
    'dashed-content': {},
    'fade-content': {},
    'mid-border-content': {}
  };

  if (variant.endsWith('content')) {
    const lineStyle: CSSProperties = {
      ...baseStyle,
      flex: 1,
      margin: 0,
      borderTop:
        variant === 'dashed-content'
          ? `1px dashed ${color}`
          : variant === 'fade-content'
            ? 0
            : `1px solid ${color}`,
      height: variant === 'fade-content' ? 1 : undefined,
      background: variant === 'fade-content' ? `linear-gradient(to right, transparent, ${color}, transparent)` : undefined,
      ...style
    };
    const labelStyle: CSSProperties = {
      color: variant === 'mid-border-content' ? 'transparent' : accentColor,
      border: variant === 'mid-border-content' ? `1px solid ${color}` : undefined,
      padding: variant === 'mid-border-content' ? '4px 1ch' : '0 1ch',
      fontSize: 12,
      lineHeight: '1.2',
      whiteSpace: 'nowrap'
    };

    return (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          margin: `${blockMargin} 0`,
          width: '100%'
        }}
      >
        <hr {...rest} style={lineStyle} />
        <span aria-hidden="true" style={labelStyle}>
          {content}
        </span>
        <hr aria-hidden="true" style={lineStyle} />
      </span>
    );
  }

  return <hr {...rest} style={{ ...baseStyle, ...styleByVariant[variant], ...style }} />;
}
