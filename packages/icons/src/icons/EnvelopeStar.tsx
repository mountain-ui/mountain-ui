import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeStar = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='m13.64 9.74-.29 1.73A1.55 1.55 0 0 0 14 13a1.46 1.46 0 0 0 1.58.09l1.42-.81 1.44.79A1.46 1.46 0 0 0 20 13a1.55 1.55 0 0 0 .63-1.51l-.29-1.73 1.2-1.22a1.54 1.54 0 0 0-.85-2.6l-1.62-.24-.73-1.55a1.5 1.5 0 0 0-2.72 0l-.73 1.55-1.62.24a1.54 1.54 0 0 0-.85 2.6Zm1.83-2.13a1.51 1.51 0 0 0 1.14-.85l.39-.83.39.83a1.55 1.55 0 0 0 1.14.86l1 .14-.73.74a1.57 1.57 0 0 0-.42 1.34l.16 1-.79-.43a1.48 1.48 0 0 0-1.44 0l-.79.43.16-1a1.54 1.54 0 0 0-.42-1.33l-.73-.75ZM21 15.26a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.67l5.88 5.88a2.94 2.94 0 0 0 2.1.88h.27a1 1 0 0 0 .91-1.08 1 1 0 0 0-1.09-.91.94.94 0 0 1-.77-.28l-5.89-5.9H9a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgEnvelopeStar;
