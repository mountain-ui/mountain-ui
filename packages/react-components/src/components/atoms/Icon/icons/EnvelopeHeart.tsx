import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeHeart = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.5 13a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 2.11.87 3 3 0 0 0 2.15-.9l.89-.88a1 1 0 0 0-1.4-1.39l-.93.91a1 1 0 0 1-1.4 0L4.91 7H9.5a1 1 0 0 0 0-2h-5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm1.05-9a3.33 3.33 0 0 0-3.88-.54 3.25 3.25 0 0 0-3.88 5.13L17 11.71a1.05 1.05 0 0 0 .71.29 1 1 0 0 0 .71-.29l3.17-3.17A3.26 3.26 0 0 0 21.55 4Zm-1.41 3.12-2.47 2.47-2.46-2.47A1.24 1.24 0 0 1 17 5.36a1 1 0 0 0 1.42 0 1.28 1.28 0 0 1 1.76 0 1.26 1.26 0 0 1-.04 1.76Z' />
  </svg>
);
export default SvgEnvelopeHeart;
