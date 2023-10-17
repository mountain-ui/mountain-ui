import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSkypeAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15.14 11.813a5.076 5.076 0 0 0-1.292-.593c-.28-.085-.59-.168-.91-.247-.28-.078-.612-.158-1.022-.248a9.315 9.315 0 0 1-1.436-.424 1.496 1.496 0 0 1-.616-.447.843.843 0 0 1-.16-.566.967.967 0 0 1 .205-.597 1.598 1.598 0 0 1 .7-.475A4.012 4.012 0 0 1 12.031 8a3.787 3.787 0 0 1 1.106.146 2.083 2.083 0 0 1 .663.322 1.235 1.235 0 0 1 .325.343 1 1 0 1 0 1.761-.948 3.147 3.147 0 0 0-.837-.958 4.006 4.006 0 0 0-1.319-.669A5.768 5.768 0 0 0 12.032 6a5.963 5.963 0 0 0-2.145.35A3.552 3.552 0 0 0 8.31 7.492a2.977 2.977 0 0 0-.604 1.797 2.839 2.839 0 0 0 .58 1.792 3.5 3.5 0 0 0 1.438 1.072 10.582 10.582 0 0 0 1.307.408c.008.003.014.01.022.012.192.058.498.135.94.23.173.038.335.079.497.12.016.004.039.009.054.014l.018.002c.248.064.487.129.706.196a3.023 3.023 0 0 1 .763.344 1.127 1.127 0 0 1 .363.368 1.201 1.201 0 0 1 .118.585 1.152 1.152 0 0 1-.214.732 1.763 1.763 0 0 1-.802.585 3.787 3.787 0 0 1-1.487.252 3.689 3.689 0 0 1-1.703-.344 1.756 1.756 0 0 1-.616-.547 1.016 1.016 0 0 1-.202-.503 1 1 0 0 0-2 0 2.94 2.94 0 0 0 .556 1.64 3.774 3.774 0 0 0 1.342 1.187 5.621 5.621 0 0 0 2.623.567 5.708 5.708 0 0 0 2.254-.405 3.71 3.71 0 0 0 1.665-1.273 3.146 3.146 0 0 0 .584-1.926 3.09 3.09 0 0 0-.375-1.53 3.165 3.165 0 0 0-.997-1.053Zm7.221 1.878A10.491 10.491 0 0 0 10.31 1.64a6.499 6.499 0 0 0-8.67 8.67A10.491 10.491 0 0 0 13.69 22.36a6.499 6.499 0 0 0 8.67-8.67ZM16.5 21a4.506 4.506 0 0 1-2.17-.558 1.004 1.004 0 0 0-.677-.106A8.492 8.492 0 0 1 3.5 12a8.583 8.583 0 0 1 .164-1.654 1.003 1.003 0 0 0-.106-.677A4.5 4.5 0 0 1 9.67 3.558a1 1 0 0 0 .678.106A8.492 8.492 0 0 1 20.5 12a8.583 8.583 0 0 1-.164 1.654 1.003 1.003 0 0 0 .106.677A4.499 4.499 0 0 1 16.5 21Z' />
  </svg>
);
export default SvgSkypeAlt;
