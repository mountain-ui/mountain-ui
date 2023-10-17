import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleHangoutsAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8.992 7.69a2 2 0 0 0 0 4l.015-.001v.501a.501.501 0 0 1-.5.5 1 1 0 0 0 0 2 2.502 2.502 0 0 0 2.5-2.5v-2.5a.941.941 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85Zm3-6.688a9.787 9.787 0 0 0-1 19.523v1.477a1 1 0 0 0 1.238.97 12.535 12.535 0 0 0 9.467-10.974 9.734 9.734 0 0 0-9.706-10.996Zm7.717 10.78a10.548 10.548 0 0 1-6.718 8.86v-1.066a1 1 0 0 0-1-1 7.787 7.787 0 1 1 7.788-7.787 7.945 7.945 0 0 1-.07.993ZM14.992 7.69a2 2 0 1 0 0 4l.015-.001v.501a.501.501 0 0 1-.5.5 1 1 0 0 0 0 2 2.502 2.502 0 0 0 2.5-2.5v-2.5a.941.941 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85Z' />
  </svg>
);
export default SvgGoogleHangoutsAlt;
