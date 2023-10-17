import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGooglePlay = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20.919 10.653a503.26 503.26 0 0 1-4.023-2.323l-.003-.002L4.64 1.253a1.679 1.679 0 0 0-1.408-.16.953.953 0 0 0-.076.03 1.418 1.418 0 0 0-.173.07 1.519 1.519 0 0 0-.738 1.364v18.986a1.435 1.435 0 0 0 .692 1.27 1.308 1.308 0 0 0 .155.064.977.977 0 0 0 .087.035 1.379 1.379 0 0 0 .446.083 1.673 1.673 0 0 0 .831-.232l12.438-7.182 4.021-2.322a1.525 1.525 0 0 0 .842-1.334 1.49 1.49 0 0 0-.837-1.272ZM4.244 19.839V4.102l7.94 7.859Zm5.018-2.162 4.344-4.31 1.15 1.139-5.494 3.171Zm4.342-7.125L9.206 6.2l5.554 3.207Zm2.947 2.917-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515Z' />
  </svg>
);
export default SvgGooglePlay;
