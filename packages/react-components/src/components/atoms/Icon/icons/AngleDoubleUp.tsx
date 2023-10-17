import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleUp = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.71 12.54a1 1 0 0 0-1.42 0l-3 3A1 1 0 0 0 9.71 17L12 14.66 14.29 17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-3-1.08L12 9.16l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42Z' />
  </svg>
);
export default SvgAngleDoubleUp;
