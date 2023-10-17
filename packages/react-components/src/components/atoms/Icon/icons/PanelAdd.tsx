import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanelAdd = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18 10h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM7 20H4V10h3Zm5 0H9V4h3Zm5 0h-3v-8h3Zm4-16h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgPanelAdd;
