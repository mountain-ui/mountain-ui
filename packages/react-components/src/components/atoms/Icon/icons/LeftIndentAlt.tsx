import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeftIndentAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm4 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2ZM5.77 9.69a1 1 0 0 0-1.41-.13l-2 1.67a1 1 0 0 0 0 1.54l2 1.67a1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.41L4.56 12l1.08-.9a1 1 0 0 0 .13-1.41ZM21 9h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgLeftIndentAlt;
