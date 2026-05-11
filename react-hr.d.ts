import type { HTMLAttributes } from 'react';
export type HrVariant = 'solid' | 'dotted' | 'dotted2' | 'dashed' | 'dashed2' | 'double' | 'dashed-fixed' | 'edge-weak' | 'twill' | 'twill-colorful' | 'wavy' | 'shadow' | 'mid-circle' | 'mid-square' | 'space-square' | 'double-arrow' | 'solid-content' | 'dashed-content' | 'fade-content' | 'mid-border-content';
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
export declare function Hr({ variant, color, accentColor, content, multiple, dashedFilled, dashedOpen, margin, style, ...rest }: HrProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=react-hr.d.ts.map