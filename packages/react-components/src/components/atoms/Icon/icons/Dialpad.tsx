import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDialpad = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M7 2.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4A.76.76 0 0 0 7.75 7V3A.76.76 0 0 0 7 2.25Zm-.75 4h-2.5v-2.5h2.5Zm14.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75Zm-.75 4h-2.5v-2.5h2.5Zm-6.25-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75Zm-.75 4h-2.5v-2.5h2.5ZM7 9.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4A.76.76 0 0 0 7 9.25Zm-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75Zm-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75Zm-.75 4h-2.5v-2.5h2.5Zm-6.25 3h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75Zm-.75 4h-2.5v-2.5h2.5Z' />
  </svg>
);
export default SvgDialpad;
