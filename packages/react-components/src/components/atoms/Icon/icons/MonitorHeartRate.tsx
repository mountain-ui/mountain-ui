import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitorHeartRate = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 19a1 1 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1 1 0 0 0 .12-.16.56.56 0 0 0 .09-.17.64.64 0 0 0 .08-.18 1.36 1.36 0 0 0 0-.2 1 1 0 0 0-.08-.38.9.9 0 0 0-.54-.54A1 1 0 0 0 8.8 17l-.18.06a.56.56 0 0 0-.17.09 1 1 0 0 0-.16.12 1 1 0 0 0-.21.33A1 1 0 0 0 8 18a1 1 0 0 0 1 1Zm-3.71-.29a1.15 1.15 0 0 0 .33.21A1 1 0 0 0 6 19h.19a.6.6 0 0 0 .19-.06.76.76 0 0 0 .18-.09l.15-.12a1.15 1.15 0 0 0 .21-.33A.84.84 0 0 0 7 18a1.36 1.36 0 0 0 0-.2.64.64 0 0 0-.06-.18.56.56 0 0 0-.09-.17 1 1 0 0 0-.12-.16 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 1 1 0 0 0-.12.16.56.56 0 0 0-.09.17.64.64 0 0 0-.1.18 1.36 1.36 0 0 0 0 .2 1 1 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33ZM19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3h16Zm0-5H4v-4h4a1 1 0 0 0 .71-.29L10 8.46l2.8 3.2a1 1 0 0 0 .72.34 1 1 0 0 0 .71-.29L15.91 10H20Zm0-6h-4.5a1 1 0 0 0-.71.29l-1.24 1.25-2.8-3.2a1 1 0 0 0-1.46 0L7.59 8H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgMonitorHeartRate;
