import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudRainSun = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 7h-.8a4.25 4.25 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.25 4.25 0 0 0 17 3.8V3a1 1 0 0 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0 0 10.5 6a6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58 1.14 1.14 0 0 0 .4.08 1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 14.5 1.5 1.5 0 0 1 5.5 13a1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .94 4.23 1 1 0 0 0 1.1 1.68 4.34 4.34 0 0 0 1.9-3.62 4.19 4.19 0 0 0-.3-1.55l.13.12a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.56-.56A4.25 4.25 0 0 0 20.2 9h.8a1 1 0 0 0 0-2Zm-3.34 2.65a2.09 2.09 0 0 1-.6.42A4.17 4.17 0 0 0 16 9.54a6.12 6.12 0 0 0-2.09-2.49 2.42 2.42 0 0 1 .46-.7 2.43 2.43 0 0 1 3.3 0 2.37 2.37 0 0 1 0 3.3ZM8.5 14a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm4-1a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgCloudRainSun;
