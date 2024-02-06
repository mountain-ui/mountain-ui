import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAnnoyed = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M9 9a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6 4a5 5 0 0 0-4.37 2.57 1 1 0 0 0 .37 1.36 1 1 0 0 0 .49.13 1 1 0 0 0 .87-.51A3 3 0 0 1 15 15a1 1 0 0 0 0-2m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAnnoyed);
export default ForwardRef;
