import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShieldQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11.29 14.66a1 1 0 0 0-.29.7 1 1 0 0 0 .08.39 1 1 0 0 0 1.92-.39 1 1 0 0 0-.29-.7 1 1 0 0 0-1.42 0Zm8.34-11a1 1 0 0 0-.84-.2 8 8 0 0 1-6.22-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-6.22 1.26 1 1 0 0 0-.84.2 1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39 10 10 0 0 0 6 1.39Zm-6-4.52a3 3 0 0 0-2.6 1.5 1 1 0 0 0 1.73 1 1 1 0 1 1 .87 1.5 1 1 0 0 0 0 2 3 3 0 1 0 0-6Z' />
  </svg>
);
export default SvgShieldQuestion;
