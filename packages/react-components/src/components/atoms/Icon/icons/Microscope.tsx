import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicroscope = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20 21.005h-5.184a2.964 2.964 0 0 0 .143-.591A8.044 8.044 0 0 0 20 13.005a7.945 7.945 0 0 0-2.127-5.422l.637-.638a.991.991 0 0 0 .241-.39l.708-2.122a1 1 0 0 0-.241-1.024l-2.122-2.121a.999.999 0 0 0-1.024-.242l-2.12.707a.997.997 0 0 0-.391.242L7.198 8.358a1 1 0 0 0 0 1.414l-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413.002.002a1 1 0 0 0 1.414 0l4.31-4.312A5.955 5.955 0 0 1 18 13.005a6.048 6.048 0 0 1-3.455 5.431 2.976 2.976 0 0 0-5.124.063 6.822 6.822 0 0 1-1.12-.554.989.989 0 0 0 .699-.94 1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1.331a8.814 8.814 0 0 0 3.717 2.473 2.955 2.955 0 0 0 .136.527H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM8.611 12.602l-.708-.707.708-.708.707.708Zm8.318-6.904L11.44 11.19 9.32 9.065l5.489-5.489 1.311-.437 1.247 1.247ZM12 21.005a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z' />
  </svg>
);
export default SvgMicroscope;
