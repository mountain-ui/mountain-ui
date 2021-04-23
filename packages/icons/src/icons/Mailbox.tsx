import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMailbox(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 12h2a1 1 0 000-2H8a1 1 0 000 2zm9-6h-5V4h1a1 1 0 000-2h-2a1 1 0 00-1 1v3H7a4 4 0 00-4 4v6a1 1 0 001 1h6v4a1 1 0 002 0v-4h8a1 1 0 001-1v-6a4 4 0 00-4-4zm-4 4v5H5v-5a2 2 0 012-2h6.56a3.91 3.91 0 00-.56 2zm6 5h-4v-5a2 2 0 014 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMailbox);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
