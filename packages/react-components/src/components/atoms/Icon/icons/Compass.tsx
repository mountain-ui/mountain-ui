import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompass = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 17.93V19a1 1 0 0 0-2 0v.93A8 8 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93A8 8 0 0 1 11 4.07V5a1 1 0 0 0 2 0v-.93A8 8 0 0 1 19.93 11H19a1 1 0 0 0 0 2h.93A8 8 0 0 1 13 19.93Zm2.14-12.38-5 2.12a1 1 0 0 0-.52.52l-2.12 5a1 1 0 0 0 .21 1.1 1 1 0 0 0 .7.3.93.93 0 0 0 .4-.09l5-2.12a1 1 0 0 0 .52-.52l2.12-5a1 1 0 0 0-1.31-1.31Zm-2.49 5.1-2.28 1 1-2.28 2.28-1Z' />
  </svg>
);
export default SvgCompass;
