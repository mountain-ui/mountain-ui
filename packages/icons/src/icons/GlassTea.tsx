import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgGlassTea(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 3a3 3 0 00-2.23-1H7.23a3 3 0 00-3 3.33l1.56 14a3 3 0 003 2.67h6.42a3 3 0 003-2.67l1.56-14A3 3 0 0019 3zm-2.8 16.11a1 1 0 01-1 .89H8.79a1 1 0 01-1-.89L6.78 10h10.44zM17.44 8H6.56l-.32-2.89a1 1 0 01.25-.78A1 1 0 017.23 4h9.54a1 1 0 01.74.33 1 1 0 01.25.78zM14 18a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1zm-4 0a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGlassTea);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
