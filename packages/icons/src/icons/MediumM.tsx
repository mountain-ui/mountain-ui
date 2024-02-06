import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMediumM = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.21 6.417H22V4.083h-7.48l-2.486 9.167h-.068L9.503 4.083H2v2.334h.768a.9.9 0 0 1 .732.694v9.83a.84.84 0 0 1-.732.642H2v2.334h6v-2.334H6.5V7.25h.088l3.457 12.667h2.712L16.26 7.25h.073v10.333h-1.5v2.334H22v-2.334h-.791a.84.84 0 0 1-.709-.641v-9.83a.9.9 0 0 1 .71-.695' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMediumM);
export default ForwardRef;
