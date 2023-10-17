import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClub = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 12.5a5.52 5.52 0 0 0-3.51-5.12 5.49 5.49 0 0 0-11 0A5.5 5.5 0 0 0 8.5 18h.2a6.91 6.91 0 0 1-1.24 2.39A1 1 0 0 0 8.24 22h7.52a1 1 0 0 0 .78-1.63A6.91 6.91 0 0 1 15.3 18h.2a5.51 5.51 0 0 0 5.5-5.5ZM10.06 20a8.89 8.89 0 0 0 .81-2.56 5.47 5.47 0 0 0 1.13-.7 5.47 5.47 0 0 0 1.13.7 8.89 8.89 0 0 0 .81 2.56Zm2.72-5.3-.08-.08-.08-.08h-.07l-.18-.09-.18-.06h-.38l-.18.06a.56.56 0 0 0-.17.09h-.08l-.08.08-.08.08a3.5 3.5 0 1 1-3.47-5.62A1.11 1.11 0 0 0 7.91 9a1.42 1.42 0 0 0 .18-.08.83.83 0 0 0 .14-.13.62.62 0 0 0 .21-.31.61.61 0 0 0 .07-.17.69.69 0 0 0 0-.2 1 1 0 0 0 0-.17 3.4 3.4 0 0 1 0-.45 3.5 3.5 0 0 1 7 0 3.4 3.4 0 0 1 0 .45.81.81 0 0 0 0 .16.74.74 0 0 0 0 .21.61.61 0 0 0 .07.17.62.62 0 0 0 .21.31.83.83 0 0 0 .14.13 1.42 1.42 0 0 0 .18.08 1.11 1.11 0 0 0 .16.07 3.5 3.5 0 1 1-3.47 5.62Z' />
  </svg>
);
export default SvgClub;
