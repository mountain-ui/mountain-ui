import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStethoscopeAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 8a2.993 2.993 0 0 0-1 5.816V15.5a4.5 4.5 0 0 1-9 0v-1.02l3.124-2.498A4.976 4.976 0 0 0 14 8.078V3a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v4.078a2.986 2.986 0 0 1-1.125 2.342L8 12.72l-2.874-2.3A2.985 2.985 0 0 1 4 8.078V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v5.078a4.975 4.975 0 0 0 1.876 3.904L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 19 8Zm0 4a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z' />
  </svg>
);
export default SvgStethoscopeAlt;
