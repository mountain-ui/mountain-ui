import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLine = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13.78 9.46a.38.38 0 0 0-.38.38v1.67L12 9.65a.4.4 0 0 0-.33-.19.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38.38.38 0 0 0 .38-.38V11l1.39 1.91a.27.27 0 0 0 .15.11.32.32 0 0 0 .14 0A.33.33 0 0 0 14 13l.1-.07a.39.39 0 0 0 .11-.27V9.84a.38.38 0 0 0-.43-.38ZM9.2 12.27H8.14V9.84a.38.38 0 0 0-.38-.38.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38H9.2a.39.39 0 0 0 .39-.38.39.39 0 0 0-.39-.41Zm1.11-2.81a.39.39 0 0 0-.39.38v2.84a.39.39 0 0 0 .39.38.38.38 0 0 0 .38-.38V9.84a.38.38 0 0 0-.38-.38ZM17.91 2H6.09A4.1 4.1 0 0 0 2 6.09v11.82A4.1 4.1 0 0 0 6.09 22h11.82A4.1 4.1 0 0 0 22 17.91V6.09A4.1 4.1 0 0 0 17.91 2Zm.31 12.28a1.55 1.55 0 0 1-.13.17 5.5 5.5 0 0 1-.8.8c-2 1.87-5.36 4.11-5.81 3.76s.64-1.76-.53-2a1 1 0 0 1-.25 0c-3.44-.48-6-2.89-6-5.78 0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 0 1-1.16 3.05Zm-1.71-4.81H15a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38h1.48a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.38h-1.03v-.6h1.06a.39.39 0 0 0 .38-.39.38.38 0 0 0-.38-.38h-1.06v-.61h1.06a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.48Z' />
  </svg>
);
export default SvgLine;
