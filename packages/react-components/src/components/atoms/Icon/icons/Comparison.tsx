import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComparison = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 20H4v-.54l5-5 3.8 3.8a1 1 0 0 0 1.41 0l7.5-7.5a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-6.8 6.8-3.79-3.8a1 1 0 0 0-1.41 0L4 16.63v-5.17l5-5 2.8 2.8a1 1 0 0 0 1.41 0L18 4.47l2.19 2.19a1 1 0 0 0 1.41-1.42l-2.91-2.89a1 1 0 0 0-1.41 0l-4.8 4.8-2.79-2.8a1 1 0 0 0-1.41 0L4 8.63V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgComparison;
