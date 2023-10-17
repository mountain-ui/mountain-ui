import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBug = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 14h2a1 1 0 0 0 0-2h-2v-1a5.15 5.15 0 0 0-.21-1.36A5 5 0 0 0 22 5a1 1 0 0 0-2 0 3 3 0 0 1-2.14 2.87A5 5 0 0 0 16 6.4a2.58 2.58 0 0 0 0-.4 4 4 0 0 0-8 0 2.58 2.58 0 0 0 0 .4 5 5 0 0 0-1.9 1.47A3 3 0 0 1 4 5a1 1 0 0 0-2 0 5 5 0 0 0 3.21 4.64A5.15 5.15 0 0 0 5 11v1H3a1 1 0 0 0 0 2h2v1a7 7 0 0 0 .14 1.38A5 5 0 0 0 2 21a1 1 0 0 0 2 0 3 3 0 0 1 1.81-2.74 7 7 0 0 0 12.38 0A3 3 0 0 1 20 21a1 1 0 0 0 2 0 5 5 0 0 0-3.14-4.62A7 7 0 0 0 19 15Zm-8 5.9A5 5 0 0 1 7 15v-4a3 3 0 0 1 3-3h1ZM10 6a2 2 0 0 1 4 0Zm7 9a5 5 0 0 1-4 4.9V8h1a3 3 0 0 1 3 3Z' />
  </svg>
);
export default SvgBug;
