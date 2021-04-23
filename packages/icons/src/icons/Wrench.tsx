import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWrench(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 15.58l-4.52-4.51a6.85 6.85 0 00.14-1.4A7.67 7.67 0 006.42 2.72a1 1 0 00-.57.74 1 1 0 00.28.88l4.35 4.34-1.8 1.8-4.34-4.35a1 1 0 00-.88-.27 1 1 0 00-.74.56 7.67 7.67 0 007 10.91 6.85 6.85 0 001.4-.14l4.51 4.52a1 1 0 001.42 0 1 1 0 000-1.42l-4.9-4.9a1 1 0 00-.95-.26 5.88 5.88 0 01-1.48.2A5.67 5.67 0 014 9.67a6 6 0 01.08-1L8 12.6a1 1 0 001.42 0l3.18-3.21a1 1 0 000-1.39L8.71 4.08a6.12 6.12 0 011-.08 5.67 5.67 0 015.66 5.67 5.88 5.88 0 01-.2 1.48 1 1 0 00.26.95l4.9 4.9a1 1 0 001.42-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWrench);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
