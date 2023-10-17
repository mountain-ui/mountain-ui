import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServer = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm4-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 17v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 22 7Zm-2 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-5-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM9 5H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgServer;
