import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneSlash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M4.91 13.1a1 1 0 0 0 .85.47A1 1 0 0 0 6.61 12a17 17 0 0 1-2.47-6.85 1 1 0 0 1 .24-.81A1 1 0 0 1 5.13 4h3a1 1 0 0 1 1 .8c0 .23.08.44.13.67v.13a10.33 10.33 0 0 0 .47 1.54l-1.39.66a1 1 0 0 0-.52.57 1 1 0 0 0 0 .77c.1.21.2.42.32.64a1 1 0 0 0 1.37.37 1 1 0 0 0 .5-.94l.57-.21a2 2 0 0 0 1.05-2.48 9.3 9.3 0 0 1-.39-1.3v-.1c0-.2-.08-.4-.11-.58A3 3 0 0 0 8.16 2h-3a3 3 0 0 0-2.28 1 3 3 0 0 0-.72 2.39 19.05 19.05 0 0 0 2.75 7.71Zm14.61-.21-.6-.11h-.08a9.31 9.31 0 0 1-1.33-.39 2 2 0 0 0-2.47 1l-.21.46a12.39 12.39 0 0 1-1.92-1.37l8.8-8.79a1 1 0 1 0-1.42-1.42l-18 18a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.59-4.6a19.09 19.09 0 0 0 10.29 4.73 2.69 2.69 0 0 0 .4 0 3 3 0 0 0 2-.75 3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.93Zm.48 6a1 1 0 0 1-.34.75 1 1 0 0 1-.81.24 17.07 17.07 0 0 1-9.14-4.18l1.77-1.77a14.69 14.69 0 0 0 3.38 2.21 1 1 0 0 0 .77 0 1 1 0 0 0 .57-.52l.62-1.41a12 12 0 0 0 1.6.47h.11l.69.13a1 1 0 0 1 .78 1Z' />
  </svg>
);
export default SvgPhoneSlash;
