import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCreativeCommonsPd = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.69-4.9l2.36 2.37A3 3 0 0 0 8 10v4a3 3 0 0 0 3 3h2a3 3 0 0 0 1.89-.69l2 2A7.92 7.92 0 0 1 12 20m-2-6v-2.59l3.46 3.46A.9.9 0 0 1 13 15h-2a1 1 0 0 1-1-1m8.31 2.9L16 14.53a3 3 0 0 0 0-.53 1 1 0 0 0-1-1 .9.9 0 0 0-.46.13l-4-4A.9.9 0 0 1 11 9h2a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2a3 3 0 0 0-1.89.69l-2-2A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCreativeCommonsPd);
export default ForwardRef;
