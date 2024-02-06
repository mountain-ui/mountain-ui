import * as React from 'react';
import { forwardRef, Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAlignLeftJustify = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m12 14H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2m6-8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAlignLeftJustify);
export default ForwardRef;
