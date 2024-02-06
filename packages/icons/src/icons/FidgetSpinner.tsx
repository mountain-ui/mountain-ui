import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFidgetSpinner = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-5.696 9.134a1 1 0 1 0 1.366.366 1 1 0 0 0-1.366-.366m11.392 0a1 1 0 1 0 .366 1.366 1 1 0 0 0-.366-1.366m2.914-2.791a4.92 4.92 0 0 0-4.526-1.197l-.419-.763a4.99 4.99 0 0 0-2.503-8.251 5.04 5.04 0 0 0-4.279.958A4.98 4.98 0 0 0 7 8a4.93 4.93 0 0 0 1.352 3.392l-.419.75a4.99 4.99 0 0 0-5.926 6.286 5.03 5.03 0 0 0 2.97 3.226 4.97 4.97 0 0 0 6.588-3.19l.867.014a4.98 4.98 0 0 0 4.76 3.524 5.02 5.02 0 0 0 4.8-3.573 4.95 4.95 0 0 0-1.382-5.086m-.528 4.495a3.006 3.006 0 0 1-4.386 1.76 2.97 2.97 0 0 1-1.352-1.705 1.99 1.99 0 0 0-1.91-1.43h-.869a1.995 1.995 0 0 0-1.91 1.43 2.98 2.98 0 0 1-3.948 1.899 2.993 2.993 0 0 1 1.767-5.704 1.97 1.97 0 0 0 2.173-.942l.436-.754a1.995 1.995 0 0 0-.281-2.369 2.98 2.98 0 0 1 .329-4.37 2.993 2.993 0 0 1 4.069 4.369 2 2 0 0 0-.283 2.37l.435.753a1.974 1.974 0 0 0 2.174.943 2.988 2.988 0 0 1 3.556 3.75' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFidgetSpinner);
export default ForwardRef;
