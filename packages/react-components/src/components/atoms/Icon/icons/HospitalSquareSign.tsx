import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospitalSquareSign = ({
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
    <path d='M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm4-4H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm1 17a1.001 1.001 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V5a1.001 1.001 0 0 1 1-1h14a1.001 1.001 0 0 1 1 1Z' />
  </svg>
);
export default SvgHospitalSquareSign;
