import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Svg21Plus = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M17 18a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1Zm1-13h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm3.6 4a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM10 13h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H9v-2a1 1 0 0 1 1-1Z' />
  </svg>
);
export default Svg21Plus;
