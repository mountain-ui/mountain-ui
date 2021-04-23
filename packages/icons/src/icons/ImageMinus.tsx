import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageMinus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M21 4.008h-4a1 1 0 000 2h4a1 1 0 000-2zM19 8a1 1 0 00-1 1v5.392l-1.48-1.48a2.78 2.78 0 00-3.929 0l-.698.697-2.486-2.486a2.777 2.777 0 00-3.924 0L4 12.606V7a1.001 1.001 0 011-1h8a1 1 0 000-2H5a3.003 3.003 0 00-3 3v12a3.003 3.003 0 003 3h12a3.003 3.003 0 003-3V9a1 1 0 00-1-1zM5 20a1.001 1.001 0 01-1-1v-3.566l2.897-2.897a.8.8 0 011.096 0l3.168 3.167c.009.01.012.022.02.03L15.448 20zm13-1a.971.971 0 01-.179.537l-4.514-4.514.698-.698a.78.78 0 011.1 0L18 17.22z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageMinus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
