import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShuffle = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 10a1 1 0 0 0 1-1V5.41L8.56 10A1 1 0 0 0 10 10a1 1 0 0 0 0-1.41L5.41 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v6a1 1 0 0 0 1 1Zm12.3 4a1 1 0 0 0-1.41 1.41l6.27 6.28a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42ZM9 20H5.41l16.3-16.29a1 1 0 1 0-1.42-1.42L4 18.59V15a1 1 0 0 0-2 0v6a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h6a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgShuffle;
