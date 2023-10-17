import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFootballAmerican = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.84 5.56a4.08 4.08 0 0 0-1.14-2.25 4.08 4.08 0 0 0-2.25-1.14 13.65 13.65 0 0 0-5.29.24 1.17 1.17 0 0 0-.2.06 14.44 14.44 0 0 0-6.69 3.8A14.59 14.59 0 0 0 2.45 13c0 .06 0 .12-.05.19a13.7 13.7 0 0 0-.24 5.3 4.08 4.08 0 0 0 1.14 2.2 4.08 4.08 0 0 0 2.25 1.14 13.12 13.12 0 0 0 2.08.17 13.8 13.8 0 0 0 3.26-.41h.14a14.54 14.54 0 0 0 10.52-10.5c0-.06 0-.12.05-.19a13.7 13.7 0 0 0 .24-5.34ZM16.37 4a10.44 10.44 0 0 1 1.76.14 1.68 1.68 0 0 1 .24.07L17 5.59l-1.54-1.54c.3-.05.61-.05.91-.05Zm-8.7 3.67a12.72 12.72 0 0 1 5.4-3.19L15.59 7l-2.15 2.15-.73-.73a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l.73.73L10.56 12l-.73-.73a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l.73.73L7 15.59l-2.51-2.51a12.67 12.67 0 0 1 3.18-5.41Zm-3.46 10.7a1.68 1.68 0 0 1-.07-.24A11.38 11.38 0 0 1 4 15.46L5.59 17Zm1.66 1.49a1.68 1.68 0 0 1-.24-.07L7 18.41 8.54 20a11.38 11.38 0 0 1-2.67-.14Zm10.46-3.53a12.67 12.67 0 0 1-5.41 3.18L8.41 17l2.15-2.15.73.73a1 1 0 1 0 1.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 0 0 .71.29 1 1 0 0 0 .7-1.71l-.73-.73L17 8.41l2.51 2.51a12.67 12.67 0 0 1-3.18 5.41ZM20 8.54 18.41 7l1.38-1.37a1.68 1.68 0 0 1 .07.24A11.38 11.38 0 0 1 20 8.54Z' />
  </svg>
);
export default SvgFootballAmerican;
