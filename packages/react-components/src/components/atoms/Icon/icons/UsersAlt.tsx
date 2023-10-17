import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsersAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0 6 6 0 0 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28ZM9 11.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2 3 3 0 0 1 3 3 3 3 0 0 1-1.5 2.59 1 1 0 0 0-.5.84 1 1 0 0 0 .45.86l.39.26.13.07a7 7 0 0 1 4 6.38 1 1 0 0 0 2 0 9 9 0 0 0-4.23-7.68Z' />
  </svg>
);
export default SvgUsersAlt;
