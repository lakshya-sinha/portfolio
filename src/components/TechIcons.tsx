// icons.tsx
import React, { forwardRef } from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/** helper: returns safe SVG props; forwards rest props */
const getIconProps = (size?: number | string, rest?: React.SVGProps<SVGSVGElement>) => {
  const s = size ?? 24;
  return {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...rest,
  } as React.SVGProps<SVGSVGElement>;
};

/* ---------- Icons ---------- */

/** React - colorful */
export const ReactIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 256 256">
      <defs>
        <linearGradient id="r1" x1="0" x2="1">
          <stop offset="0" stopColor="#61dafb" />
          <stop offset="1" stopColor="#7be4ff" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#r1)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="128" cy="128" rx="86" ry="36" />
        <ellipse cx="128" cy="128" rx="86" ry="36" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="86" ry="36" transform="rotate(120 128 128)" />
      </g>
      <circle cx="128" cy="128" r="20" fill="#61dafb" />
    </svg>
  );
});
ReactIcon.displayName = "ReactIcon";

/** TypeScript - square badge */
export const TypescriptIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 256 256" role="img">
      <rect width="256" height="256" rx="36" fill="#3178c6" />
      <path d="M88 176v-96h64v16h-48v16h40v16h-40v48z" fill="#fff" />
    </svg>
  );
});
TypescriptIcon.displayName = "TypescriptIcon";

/** JavaScript - JS letters on yellow square */
export const JavascriptIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 256 256" role="img">
      <rect width="256" height="256" rx="36" fill="#f7df1e" />
      <path d="M98 178c0 13 9 18 22 18 12 0 20-5 25-11l-11-7c-4 5-8 9-14 9-6 0-10-3-10-10v-56h-12v58zM150 178c0 13 9 18 22 18 12 0 20-5 25-11l-11-7c-4 5-8 9-14 9-6 0-10-3-10-10v-56h-12v58z" fill="#000" />
    </svg>
  );
});
JavascriptIcon.displayName = "JavascriptIcon";

/** Node.js - hex + stylized inner shape */
export const NodeIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 256 256" role="img">
      <path d="M128 10L20 74v108l108 64 108-64V74z" fill="#7cc327" />
      <path d="M128 60l70 40v60l-70 40-70-40V100z" fill="#ffffff" opacity="0.08" />
      <path d="M128 86c-20 0-36 16-36 36s16 36 36 36 36-16 36-36-16-36-36-36z" fill="#83c34a" />
    </svg>
  );
});
NodeIcon.displayName = "NodeIcon";

/** HTML5 */
export const HtmlIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#e44d26"/>
      <path d="M6 3l1 14 5 2 5-2 1-14H6z" fill="#fff"/>
      <path d="M12 17l4-1 1-10H12z" fill="#e44d26" opacity="0.2"/>
    </svg>
  );
});
HtmlIcon.displayName = "HtmlIcon";

/** CSS3 */
export const CssIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#1572B6"/>
      <path d="M6 3l1 14 5 2 5-2 1-14H6z" fill="#fff"/>
      <path d="M12 17l4-1 1-10H12z" fill="#1572B6" opacity="0.2"/>
    </svg>
  );
});
CssIcon.displayName = "CssIcon";

/** GitHub - official glyph (monochrome) */
export const GithubIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...rest }, ref) => {
  const props = getIconProps(size, rest);
  return (
    <svg {...props} ref={ref} viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="GitHub">
      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.2.8.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.5 1.2-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.3a11.3 11.3 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.3 2.9.1 3.2.8.9 1.2 2.1 1.2 3.4 0 4.7-2.8 5.7-5.4 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.5 5.6 18.4.5 12 .5z"/>
    </svg>
  );
});
GithubIcon.displayName = "GithubIcon";

/* export default optional collection */
export default {
  ReactIcon,
  TypescriptIcon,
  JavascriptIcon,
  NodeIcon,
  HtmlIcon,
  CssIcon,
  GithubIcon,
};
