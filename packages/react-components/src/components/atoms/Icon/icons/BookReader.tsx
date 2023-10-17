import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookReader = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.18 10.19A11.9 11.9 0 0 0 18 10c-.42 0-.83 0-1.24.08a5.91 5.91 0 0 0-1.91-1.65 3.81 3.81 0 0 0 1-2.57 3.86 3.86 0 0 0-7.72 0 3.81 3.81 0 0 0 1 2.57 6.11 6.11 0 0 0-1.91 1.64C6.83 10 6.42 10 6 10a11.9 11.9 0 0 0-2.18.21 1 1 0 0 0-.82 1v8.25a1 1 0 0 0 .36.77 1 1 0 0 0 .82.22A9.75 9.75 0 0 1 6 20.23a9.89 9.89 0 0 1 5.45 1.63l.13.05A1.09 1.09 0 0 0 12 22a.87.87 0 0 0 .28-.05h.07l.13-.05A9.89 9.89 0 0 1 18 20.23a9.75 9.75 0 0 1 1.82.18 1 1 0 0 0 .82-.22 1 1 0 0 0 .36-.77v-8.25a1 1 0 0 0-.82-.98ZM12 4a1.86 1.86 0 0 1 0 3.71A1.86 1.86 0 0 1 12 4Zm-1 15.33a11.92 11.92 0 0 0-5-1.1c-.33 0-.66 0-1 .05V12a9.63 9.63 0 0 1 2.52.05h.11A10 10 0 0 1 11 13.33Zm1-7.73a11.77 11.77 0 0 0-1.38-.68h-.06c-.33-.13-.66-.26-1-.36A4 4 0 0 1 12 9.69a4 4 0 0 1 2.44.85A12.43 12.43 0 0 0 12 11.6Zm7 6.68a11.6 11.6 0 0 0-6 1v-6a9.76 9.76 0 0 1 3.37-1.22h.2A9.39 9.39 0 0 1 19 12Z' />
  </svg>
);
export default SvgBookReader;
