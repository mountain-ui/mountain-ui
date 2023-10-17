import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneVolume = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.41 13c-.22 0-.45-.07-.67-.12a9.86 9.86 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.46a13.17 13.17 0 0 1-2.67-2 13.17 13.17 0 0 1-2-2.67l.46-.21a2 2 0 0 0 1-2.48 10.47 10.47 0 0 1-.39-1.32c-.05-.22-.09-.45-.12-.67a3 3 0 0 0-3-2.49H5a3 3 0 0 0-2.24 1 3 3 0 0 0-.73 2.4 19.07 19.07 0 0 0 5.41 11 19.07 19.07 0 0 0 11 5.41 2.56 2.56 0 0 0 .39 0 3 3 0 0 0 2-.76 3 3 0 0 0 1-2.24v-3A3 3 0 0 0 19.41 13Zm.49 6a1 1 0 0 1-.33.74 1 1 0 0 1-.82.25 17.16 17.16 0 0 1-9.87-4.84A17.16 17.16 0 0 1 4 5.25a1 1 0 0 1 .25-.82A1 1 0 0 1 5 4.1h3a1 1 0 0 1 1 .78c0 .27.09.55.15.82a11 11 0 0 0 .46 1.54l-1.4.66a1 1 0 0 0-.52.56 1 1 0 0 0 0 .76 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .56-.52l.63-1.4a12.41 12.41 0 0 0 1.58.46c.26.06.54.11.81.15a1 1 0 0 1 .78 1ZM14 2h-.7a1 1 0 0 0 .17 2H14a6 6 0 0 1 6 6v.53a1 1 0 0 0 .91 1.08h.08a1 1 0 0 0 1-.91V10A8 8 0 0 0 14 2Zm2 8a1 1 0 0 0 2 0 4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2Z' />
  </svg>
);
export default SvgPhoneVolume;
