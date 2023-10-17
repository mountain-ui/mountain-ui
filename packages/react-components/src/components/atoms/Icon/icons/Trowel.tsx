import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrowel = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name=''
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M21.12 2.88a3.08 3.08 0 0 0-4.24 0l-2.42 2.41a3 3 0 0 0-.57 3.41l-2.15 2.15-2-2a3 3 0 0 0-5 1.17l-2.66 8a3 3 0 0 0 .72 3.07A3 3 0 0 0 5 22a2.87 2.87 0 0 0 1-.16l8-2.66a3 3 0 0 0 1.17-5l-2-2 2.15-2.15a3 3 0 0 0 3.41-.57l2.41-2.42a3 3 0 0 0-.02-4.16ZM13.7 15.63a1 1 0 0 1-.4 1.65L5.32 20a1 1 0 0 1-1-.25 1 1 0 0 1-.25-1l2.67-8a1 1 0 0 1 .7-.75 1.07 1.07 0 0 1 .23 0 1 1 0 0 1 .7.29l2 2-.87.86a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.86-.87Zm6-9.92-2.41 2.41a1 1 0 0 1-1.7-.71 1 1 0 0 1 .29-.7l2.41-2.42a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42Z' />
  </svg>
);
export default SvgTrowel;
