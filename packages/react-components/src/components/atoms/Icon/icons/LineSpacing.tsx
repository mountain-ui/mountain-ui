import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineSpacing = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M6.29 9.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3v5.18l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1 1 0 0 0-1.42-1.42l-.29.3V9.41ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2Zm10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgLineSpacing;
