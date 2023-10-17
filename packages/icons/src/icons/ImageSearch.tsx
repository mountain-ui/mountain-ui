import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageSearch = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19 13a1 1 0 0 0-1 1v.39l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.7-2.48-2.49a2.87 2.87 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1v-3.57l2.9-2.89a.79.79 0 0 1 1.09 0l3.17 3.17L15.45 20Zm13-1a1 1 0 0 1-.18.54L13.31 15l.7-.69a.77.77 0 0 1 1.1 0L18 17.22Zm3.71-8.71L20 8.57a4.31 4.31 0 1 0-6.72.79 4.27 4.27 0 0 0 3 1.26 4.34 4.34 0 0 0 2.29-.62l1.72 1.73a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.44ZM18 8a2.32 2.32 0 1 1 0-3.27A2.32 2.32 0 0 1 18 8Z' />
  </svg>
);
export default SvgImageSearch;
