import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAngry(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 11a1 1 0 00.89-.55 1 1 0 00-.44-1.34l-2-1a1 1 0 10-.9 1.78l2 1A.93.93 0 0010 11zm2-9a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm-3.64-4.67a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 00.64.23 1 1 0 00.64-1.76 5.81 5.81 0 00-7.28 0zm7.19-7.22l-2 1a1 1 0 00-.44 1.34A1 1 0 0014 11a.93.93 0 00.45-.11l2-1a1 1 0 00-.9-1.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngry);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
