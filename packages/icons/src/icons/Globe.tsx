import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlobe = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    data-name=''
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72ZM4.26 14a7.82 7.82 0 0 1 0-4h1.86a16.73 16.73 0 0 0 0 4Zm.82 2h1.4a12.15 12.15 0 0 0 1 2.57A8 8 0 0 1 5.08 16Zm1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12.15 12.15 0 0 0 6.48 8ZM11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.36 14.36 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12.15 12.15 0 0 0-1-2.57A8 8 0 0 1 18.92 8ZM13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7Zm2.86-5.7H13v-4h2.86a14.36 14.36 0 0 1 0 4Zm.69 4.57a12.15 12.15 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57ZM19.74 14h-1.86a16.16 16.16 0 0 0 .12-2 16.28 16.28 0 0 0-.12-2h1.86a7.82 7.82 0 0 1 0 4Z' />
  </svg>
);
export default SvgGlobe;
