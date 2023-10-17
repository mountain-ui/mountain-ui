import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBus = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8.5 17a1 1 0 0 0 1-1 1.36 1.36 0 0 0 0-.2.64.64 0 0 0-.06-.18.76.76 0 0 0-.09-.18l-.12-.15a1 1 0 0 0-.33-.21 1 1 0 0 0-.6-.08l-.18.06-.18.09a1.58 1.58 0 0 0-.15.12l-.12.15a.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.36 1.36 0 0 0 0 .2 1 1 0 0 0 1 1Zm8 0a1 1 0 0 0 1-1 1.36 1.36 0 0 0 0-.2.64.64 0 0 0-.06-.18.76.76 0 0 0-.09-.18l-.12-.15a1.15 1.15 0 0 0-.33-.21 1 1 0 0 0-.76 0 1.15 1.15 0 0 0-.33.21l-.12.15a.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.36 1.36 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .67.3Zm-3-12h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm5-3h-12a3 3 0 0 0-3 3v12a3 3 0 0 0 2 2.82V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 2-2.82V5a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-3h14Zm0-5h-14V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgBus;
