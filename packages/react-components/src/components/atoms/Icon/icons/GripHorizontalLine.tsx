import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGripHorizontalLine = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M3 11h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgGripHorizontalLine;
