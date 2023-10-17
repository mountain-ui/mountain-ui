import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindSun = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11 4.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm-7 7a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm.636 4.95-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414Zm0-9.9A1 1 0 0 0 6.05 5.136l-.707-.707a1 1 0 0 0-1.414 1.414Zm12.021.293a.997.997 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707ZM13 12a1 1 0 0 0 1 1h5a3.003 3.003 0 0 0 3-3 1 1 0 0 0-2 0 1.013 1.013 0 0 1-1 1h-5a1 1 0 0 0-1 1Zm7 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6ZM9 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm6 0h-2a1 1 0 0 0 0 2h2a1.013 1.013 0 0 1 1 1 1 1 0 0 0 2 0 3.003 3.003 0 0 0-3-3Zm-4-4a3.5 3.5 0 0 1 0-7 3.415 3.415 0 0 1 2.188.774 1 1 0 1 0 1.265-1.548A5.393 5.393 0 0 0 11 6a5.5 5.5 0 0 0 0 11 1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgWindSun;
