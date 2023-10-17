import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDna = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9.2 13.73a1 1 0 0 0-1.41-.05A11.18 11.18 0 0 0 4 22a1 1 0 0 0 2 0 9.15 9.15 0 0 1 3.15-6.86 1 1 0 0 0 .05-1.41Zm10.17 4.64a10.86 10.86 0 0 0-1.6-3A14.31 14.31 0 0 0 14.06 12C16.3 10.57 20 7.4 20 2a1 1 0 0 0-2 0c0 5.4-4.59 8.17-6 8.89A13.42 13.42 0 0 1 9.31 9H12a1 1 0 0 0 0-2H7.55a9.39 9.39 0 0 1-1-2H15a1 1 0 0 0 0-2H6.06A8.14 8.14 0 0 1 6 2a1 1 0 0 0-2 0c0 7.57 7.3 10.79 7.61 10.92A12.93 12.93 0 0 1 14.7 15H12a1 1 0 0 0 0 2h4.43a9.07 9.07 0 0 1 1 2H9a1 1 0 0 0 0 2h8.94a8.26 8.26 0 0 1 .06 1 1 1 0 0 0 2 0 10.5 10.5 0 0 0-.22-2.19 9.23 9.23 0 0 0-.41-1.44Z' />
  </svg>
);
export default SvgDna;
