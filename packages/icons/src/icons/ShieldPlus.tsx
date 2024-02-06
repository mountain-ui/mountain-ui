import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgShieldPlus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m5.63-7.35a1 1 0 0 0-.835-.203 7.98 7.98 0 0 1-6.223-1.267 1 1 0 0 0-1.144 0 7.98 7.98 0 0 1-6.223 1.267A1 1 0 0 0 4 4.427v7.456a9.02 9.02 0 0 0 3.769 7.324l3.65 2.607a1 1 0 0 0 1.162 0l3.65-2.607A9.02 9.02 0 0 0 20 11.883V4.426a1 1 0 0 0-.37-.776M18 11.883a7.02 7.02 0 0 1-2.93 5.696L12 19.771 8.93 17.58A7.02 7.02 0 0 1 6 11.883v-6.3a9.96 9.96 0 0 0 6-1.391 9.96 9.96 0 0 0 6 1.391Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgShieldPlus);
export default ForwardRef;
