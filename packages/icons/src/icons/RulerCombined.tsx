import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRulerCombined = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V10h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 6h-2V7a1 1 0 0 0-2 0v1h-2V7a1 1 0 0 0-2 0v1h-2V7a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v2H7a1 1 0 0 0 0 2h1v2H7a1 1 0 0 0 0 2h1v2H4V4h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRulerCombined);
export default ForwardRef;
