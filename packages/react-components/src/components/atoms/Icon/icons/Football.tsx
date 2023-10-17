import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFootball = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.07 6.11a9.85 9.85 0 0 0-4.3-3.36A10 10 0 0 0 2 12v.56A9.94 9.94 0 0 0 3.33 17a10 10 0 0 0 5.89 4.65A10.11 10.11 0 0 0 12 22a9.45 9.45 0 0 0 1.88-.18 10 10 0 0 0 8-8.41A9.46 9.46 0 0 0 22 12a9.83 9.83 0 0 0-1.93-5.89Zm-2 .77L17 9.74l-1.62.44L13 8.49V6.64l2.49-1.81a7.81 7.81 0 0 1 2.62 2.05ZM14 11.67 13.22 14h-2.45L10 11.67l2-1.43ZM12 4a8 8 0 0 1 1.11.09l-1.11.8-1.11-.8A8 8 0 0 1 12 4ZM4.88 8.37l.4 1.32-1.13.79a7.88 7.88 0 0 1 .73-2.11Zm1.37 9.17 1.38.05.37 1.33a8.32 8.32 0 0 1-1.75-1.38ZM8 15.6l-3.15-.11A7.83 7.83 0 0 1 4.07 13l2.49-1.74 1.44.62.89 2.76Zm.86-5.53-1.56-.7-.91-3A7.93 7.93 0 0 1 8.5 4.83L11 6.64v1.85ZM13 19.93a8.08 8.08 0 0 1-2.63-.12l-.83-2.92.83-.89h3.07l.67 1Zm2.41-.7.46-1.23 1.36.07a7.83 7.83 0 0 1-1.85 1.16Zm3.46-3.12L15.76 16l-.71-1.1.89-2.76 1.51-.41 2.36 2a7.84 7.84 0 0 1-.97 2.38Zm.05-5.83L19.4 9a7.4 7.4 0 0 1 .53 2.13Z' />
  </svg>
);
export default SvgFootball;
