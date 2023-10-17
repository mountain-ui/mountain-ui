import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudSun = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21 9h-.8a4.25 4.25 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.25 4.25 0 0 0 17 5.8V5a1 1 0 0 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0 0 10.5 8a6 6 0 0 0-5.94 5.13A3.5 3.5 0 0 0 5.5 20h9.17A4.33 4.33 0 0 0 19 15.67a4.19 4.19 0 0 0-.3-1.55l.13.12a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.56-.56A4.25 4.25 0 0 0 20.2 11h.8a1 1 0 0 0 0-2Zm-6.33 9H5.5a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.33 2.33 0 0 1-.39 4.62Zm3-6.35a2.17 2.17 0 0 1-.6.4 4.49 4.49 0 0 0-1.07-.51 6.12 6.12 0 0 0-2.09-2.49 2.25 2.25 0 0 1 .46-.69 2.42 2.42 0 0 1 3.29 0 2.37 2.37 0 0 1 0 3.3Z' />
  </svg>
);
export default SvgCloudSun;
