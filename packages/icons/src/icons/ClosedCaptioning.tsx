import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClosedCaptioning(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.24 13.14a1 1 0 00-1.37.36 1 1 0 01-1.58.19A.93.93 0 018 13v-2a1 1 0 011.88-.48 1 1 0 001.37.34 1 1 0 00.34-1.38 3.08 3.08 0 00-.46-.59A3 3 0 009 8a3 3 0 00-3 3v2a3 3 0 005.59 1.5 1 1 0 00-.35-1.36zm6 0a1 1 0 00-1.37.36 1 1 0 01-1.58.19A.93.93 0 0114 13v-2a1 1 0 011.88-.48 1 1 0 001.37.34 1 1 0 00.34-1.38 3.08 3.08 0 00-.46-.59A3 3 0 0015 8a3 3 0 00-3 3v2a3 3 0 005.59 1.5 1 1 0 00-.35-1.36zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClosedCaptioning);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
