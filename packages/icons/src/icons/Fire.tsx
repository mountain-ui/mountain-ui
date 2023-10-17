import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFire = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z' />
  </svg>
);
export default SvgFire;
