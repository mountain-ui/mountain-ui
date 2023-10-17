import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPalette = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M7.42 15.54a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0Zm0-8.49a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0Zm4.95 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1.05Zm-6-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1.05Zm6-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1.05Zm3.54 2.05a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41-.05Zm6.3 0a11 11 0 1 0-7.85 15.74 3.87 3.87 0 0 0 2.5-1.65 4.2 4.2 0 0 0 .61-3.19 5.65 5.65 0 0 1-.1-1 5 5 0 0 1 3-4.56 3.84 3.84 0 0 0 2.06-2.25 4 4 0 0 0-.22-3.11Zm-1.7 2.44a1.9 1.9 0 0 1-1 1.09A7 7 0 0 0 15.37 17a7.3 7.3 0 0 0 .14 1.4 2.16 2.16 0 0 1-.31 1.65 1.79 1.79 0 0 1-1.21.8 8.72 8.72 0 0 1-1.62.15 9 9 0 0 1-9-9.28A9.05 9.05 0 0 1 11.85 3h.51a9 9 0 0 1 8.06 5 2 2 0 0 1 .09 1.52ZM12.37 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgPalette;
