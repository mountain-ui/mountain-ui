import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAngleRightB = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.54 11.29 9.88 5.64a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAngleRightB);
export default ForwardRef;
