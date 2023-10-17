import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExclamation = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.92 16.62a.76.76 0 0 0-.09-.18 1.58 1.58 0 0 0-.12-.15 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 1.58 1.58 0 0 0-.12.15.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.5 1.5 0 0 0 0 .2.84.84 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 12 18a.84.84 0 0 0 .38-.08.9.9 0 0 0 .54-.54A.84.84 0 0 0 13 17a1.5 1.5 0 0 0 0-.2.64.64 0 0 0-.08-.18ZM20 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Zm-6-8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgFileExclamation;
