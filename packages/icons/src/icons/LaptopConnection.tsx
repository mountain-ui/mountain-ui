import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLaptopConnection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 18h-6.18A3 3 0 0013 16.18V13h7a1 1 0 000-2h-1V5a3 3 0 00-3-3H8a3 3 0 00-3 3v6H4a1 1 0 000 2h7v3.18A3 3 0 009.18 18H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM7 11V5a1 1 0 011-1h8a1 1 0 011 1v6zm5 9a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLaptopConnection);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
