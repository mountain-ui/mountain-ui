import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboardShow = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M6.71 10.29A1 1 0 0 0 5 11a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Zm2.58-2.58A1 1 0 0 0 10 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 11 7a1.05 1.05 0 0 0-.29-.71l-.15-.12-.18-.09a.6.6 0 0 0-.19-.08 1 1 0 0 0-.9.27 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.35ZM6.56 6.17a.76.76 0 0 0-.18-.09L6.2 6a1 1 0 0 0-.91.27 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21A.84.84 0 0 0 6 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 7 7a1.05 1.05 0 0 0-.29-.71Zm6.15 12.12a1 1 0 0 0-1.42 0l-2 2a1 1 0 0 0 1.42 1.42l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm6-8a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 1.3 1.3 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 19 11a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33ZM14 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm6-8H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-3.38-6.92a.93.93 0 0 0-.33.21A1.05 1.05 0 0 0 17 7a1 1 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 18 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 19 7a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21Zm-3.06.09-.18-.09L14.2 6a1 1 0 0 0-.58.06.93.93 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 14 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 15 7a1.05 1.05 0 0 0-.29-.71Z' />
  </svg>
);
export default SvgKeyboardShow;
