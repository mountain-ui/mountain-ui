import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMailbox = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 12h2a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2m9-6h-5V4h1a1 1 0 0 0 0-2h-2a1 1 0 0 0-1 1v3H7a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h6v4a1 1 0 0 0 2 0v-4h8a1 1 0 0 0 1-1v-6a4 4 0 0 0-4-4m-4 4v5H5v-5a2 2 0 0 1 2-2h6.56a3.9 3.9 0 0 0-.56 2m6 5h-4v-5a2 2 0 0 1 4 0Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMailbox);
export default ForwardRef;
