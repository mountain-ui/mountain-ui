import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTemperatureQuarter = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-5.32-6 1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71 4 4 0 0 1-.28 6ZM13 15.28V12.5a1 1 0 0 0-2 0v2.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0 2 2 0 0 0-1-1.72' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTemperatureQuarter);
export default ForwardRef;
