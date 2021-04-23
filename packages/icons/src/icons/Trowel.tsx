import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTrowel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M21.12 2.88a3.08 3.08 0 00-4.24 0l-2.42 2.41a3 3 0 00-.57 3.41l-2.15 2.15-2-2a3 3 0 00-5 1.17l-2.66 8a3 3 0 00.72 3.07A3 3 0 005 22a2.87 2.87 0 001-.16l8-2.66a3 3 0 001.17-5l-2-2 2.15-2.15a3 3 0 003.41-.57l2.41-2.42a3 3 0 00-.02-4.16zM13.7 15.63a1 1 0 01-.4 1.65L5.32 20a1 1 0 01-1-.25 1 1 0 01-.25-1l2.67-8a1 1 0 01.7-.75 1.07 1.07 0 01.23 0 1 1 0 01.7.29l2 2-.87.86a1 1 0 000 1.42 1 1 0 001.42 0l.86-.87zm6-9.92l-2.41 2.41a1 1 0 01-1.7-.71 1 1 0 01.29-.7l2.41-2.42a1 1 0 011.42 0 1 1 0 010 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrowel);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
