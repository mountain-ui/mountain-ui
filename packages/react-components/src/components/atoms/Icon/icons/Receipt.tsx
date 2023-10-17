import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReceipt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 12H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-1-2h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm1 6H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm12-4h-3V3a1 1 0 0 0-.5-.87 1 1 0 0 0-1 0l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72a1 1 0 0 0-1 0A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1Zm15-1a1 1 0 0 1-2 0v-5h2Zm-6.44-2.83a.76.76 0 0 0-.18-.09.6.6 0 0 0-.19-.06 1 1 0 0 0-.9.27A1.05 1.05 0 0 0 12 17a1 1 0 0 0 .07.38 1.19 1.19 0 0 0 .22.33 1.15 1.15 0 0 0 .33.21.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 14 17a1.05 1.05 0 0 0-.29-.71 1.58 1.58 0 0 0-.15-.12Zm.14-3.88a1 1 0 0 0-1.62.33A1 1 0 0 0 13 14a1 1 0 0 0 1-1 1 1 0 0 0-.08-.38.91.91 0 0 0-.22-.33Z' />
  </svg>
);
export default SvgReceipt;
