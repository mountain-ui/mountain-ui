import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCameraSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.71 2.29a1 1 0 00-1.42 1.42l2.8 2.79H5a3 3 0 00-3 3v8a3 3 0 003 3h14.08l1.21 1.22a1 1 0 001.42 0 1 1 0 000-1.42zm6.49 9.33l2.68 2.68a2 2 0 01-.88.2 2 2 0 01-2-2 2 2 0 01.2-.88zM5 18.5a1 1 0 01-1-1v-8a1 1 0 011-1h2.07l1.7 1.69A3.92 3.92 0 008 12.5a4 4 0 004 4 3.92 3.92 0 002.32-.77l2.77 2.77zm14-12h-1.28l-.31-1a3 3 0 00-2.85-2h-4.4a1 1 0 000 2h4.4a1 1 0 01.95.68l.54 1.63a1 1 0 00.95.69h2a1 1 0 011 1v5.84a1 1 0 102 0V9.5a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCameraSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
