import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudSunMeatball = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.5 16.92h-.77l.39-.67a1 1 0 0 0-1.74-1l-.38.67-.38-.67a1 1 0 0 0-1.74 1l.39.67H7.5a1 1 0 0 0 0 2h.77l-.39.66a1 1 0 0 0 1.74 1l.38-.66.38.66a1 1 0 1 0 1.74-1l-.39-.66h.77a1 1 0 0 0 0-2Zm8.5-9h-.8a4.25 4.25 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.25 4.25 0 0 0 17 4.72v-.8a1 1 0 0 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.56c-.09.16-.16.33-.24.49a5.85 5.85 0 0 0-1.58-.22A6 6 0 0 0 4.56 12 3.52 3.52 0 0 0 2 15.42a3.47 3.47 0 0 0 1.41 2.79 1 1 0 1 0 1.18-1.61A1.46 1.46 0 0 1 4 15.42a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.66 2.33 2.33 0 0 1 .54 4.44 1 1 0 0 0-.52 1.32 1 1 0 0 0 .92.6.93.93 0 0 0 .4-.09 4.33 4.33 0 0 0 2.6-4 4.29 4.29 0 0 0-.3-1.56l.13.13a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-.56-.56a4.2 4.2 0 0 0 .52-1.26h.8a1 1 0 0 0 0-2Zm-3.34 2.64a1.89 1.89 0 0 1-.6.41 4.15 4.15 0 0 0-1.06-.51A6 6 0 0 0 13.88 8a2.18 2.18 0 0 1 .46-.7 2.42 2.42 0 0 1 3.3 0 2.34 2.34 0 0 1 0 3.29Z' />
  </svg>
);
export default SvgCloudSunMeatball;
