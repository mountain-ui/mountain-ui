import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCalling = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.47 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-3 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-3 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4.44 4c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.5 12.5 0 0 1-2.67-2 12.8 12.8 0 0 1-2-2.66L10 9a2 2 0 0 0 1-2.48 10 10 0 0 1-.39-1.31c-.05-.23-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-2.24 1 3 3 0 0 0-.73 2.39A19 19 0 0 0 18 21.91a2.6 2.6 0 0 0 .39 0 3 3 0 0 0 3-3v-3A3 3 0 0 0 18.91 13m.49 6a1 1 0 0 1-1.15 1 17.12 17.12 0 0 1-9.87-4.85 17.14 17.14 0 0 1-4.84-9.93 1 1 0 0 1 .25-.82 1 1 0 0 1 .74-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11 11 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.5 14.5 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .56-.52l.63-1.4a14 14 0 0 0 1.58.46c.26.06.54.11.81.15a1 1 0 0 1 .78 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCalling);
export default ForwardRef;
