import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHardHat = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20 13.17V13a8 8 0 0 0-2.42-5.74 7.84 7.84 0 0 0-3.18-1.88h-.05A8.24 8.24 0 0 0 11.76 5 8.21 8.21 0 0 0 4 13.17 3 3 0 0 0 5 19h14a3 3 0 0 0 1-5.83ZM19 17H5a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2H6a6.41 6.41 0 0 1 3-5.15V11a1 1 0 0 0 2 0V7.09a7.34 7.34 0 0 1 .82-.09H12a5.56 5.56 0 0 1 1 .1V11a1 1 0 0 0 2 0V7.82a6.65 6.65 0 0 1 1.18.87A6 6 0 0 1 18 13h-1a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2Z' />
  </svg>
);
export default SvgHardHat;
