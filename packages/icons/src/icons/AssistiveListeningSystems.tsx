import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssistiveListeningSystems = ({
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
    <path d='M11 3a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 5.07 5.07 0 0 1-.71 2.57L11.73 20A2 2 0 0 1 10 21a2 2 0 0 1-2-2 1 1 0 0 0-2 0 4 4 0 0 0 4 4 4 4 0 0 0 3.5-2.07l3.56-7.43A6.93 6.93 0 0 0 18 10a7 7 0 0 0-7-7ZM4 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM17.59 1.2a1 1 0 1 0-1.2 1.6A9 9 0 0 1 20 10a1 1 0 0 0 2 0 11.06 11.06 0 0 0-4.41-8.8ZM11 9a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-6 0 3 3 0 0 0 .51 1.68 3.5 3.5 0 0 0 .47.54l.2.22a1 1 0 0 1 0 1.11 1 1 0 0 0 .25 1.39 1 1 0 0 0 .57.18 1 1 0 0 0 .82-.43 3 3 0 0 0 0-3.39 3.39 3.39 0 0 0-.35-.42l-.14-.14a1.37 1.37 0 0 1-.16-.18A1 1 0 0 1 10 10a1 1 0 0 1 1-1Zm-4 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z' />
  </svg>
);
export default SvgAssistiveListeningSystems;
