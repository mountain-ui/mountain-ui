import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudSunTear = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M11.05 14.33a1 1 0 0 0-1.11 0c-.1.08-2.44 1.67-2.44 4.17a3 3 0 0 0 6 0c0-2.5-2.34-4.1-2.45-4.17Zm-.55 5.17a1 1 0 0 1-1-1 3 3 0 0 1 1-2 3 3 0 0 1 1 2 1 1 0 0 1-1 1ZM21 7.5h-.8a4.25 4.25 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.25 4.25 0 0 0 17 4.3v-.8a1 1 0 0 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a5.85 5.85 0 0 0-1.58-.22 6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58 1.14 1.14 0 0 0 .4.08 1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 15a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .94 4.23 1 1 0 0 0 1.1 1.68 4.3 4.3 0 0 0 1.65-5.18l.13.13a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.56-.56a4.25 4.25 0 0 0 .47-1.27h.8a1 1 0 0 0 0-2Zm-3.34 2.65a2.45 2.45 0 0 1-.6.41A4.17 4.17 0 0 0 16 10a6.12 6.12 0 0 0-2.09-2.49 2.25 2.25 0 0 1 .46-.69 2.42 2.42 0 0 1 3.29 0 2.37 2.37 0 0 1 0 3.3Z' />
  </svg>
);
export default SvgCloudSunTear;
