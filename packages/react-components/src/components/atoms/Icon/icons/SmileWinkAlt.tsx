import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSmileWinkAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm5.36 3.23a3.76 3.76 0 0 1-4.72 0 1 1 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1 1 0 1 0-1.28-1.54ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm5.62-10.87a3.08 3.08 0 0 0-4.24 0 1 1 0 0 0 1.41 1.41 1 1 0 0 1 1.42 0 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41Z' />
  </svg>
);
export default SvgSmileWinkAlt;
