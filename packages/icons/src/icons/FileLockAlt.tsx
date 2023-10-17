import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileLockAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09l-6-6a1.07 1.07 0 0 0-.28-.19.32.32 0 0 0-.09 0l-.28-.1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2Zm2-14.59L14.59 8H13a1 1 0 0 1-1-1ZM13 13a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1Zm-6-3h1a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm0 6a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm13-.82V15a3 3 0 0 0-6 0v.18A3 3 0 0 0 12 18v1a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-1a3 3 0 0 0-2-2.82ZM17 14a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1Zm3 5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgFileLockAlt;
