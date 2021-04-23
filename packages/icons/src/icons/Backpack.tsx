import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBackpack(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13 10h-2a1 1 0 000 2h2a1 1 0 000-2zm5 0a4 4 0 00-3-3.86V5a3 3 0 00-6 0v1.14A4 4 0 006 10a4 4 0 00-4 4v3a3 3 0 003 3h1.18A3 3 0 009 22h6a3 3 0 002.82-2H19a3 3 0 003-3v-3a4 4 0 00-4-4zM6 18H5a1 1 0 01-1-1v-3a2 2 0 012-2zm5-13a1 1 0 012 0v1h-2zm5 14a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a2 2 0 012-2h4a2 2 0 012 2zm0-4.44a3.91 3.91 0 00-2-.56h-4a3.91 3.91 0 00-2 .56V10a2 2 0 012-2h4a2 2 0 012 2zM20 17a1 1 0 01-1 1h-1v-6a2 2 0 012 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBackpack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
