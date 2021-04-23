import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgReceipt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 12H7a1 1 0 000 2h2a1 1 0 000-2zm-1-2h4a1 1 0 000-2H8a1 1 0 000 2zm1 6H7a1 1 0 000 2h2a1 1 0 000-2zm12-4h-3V3a1 1 0 00-.5-.87 1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1zm15-1a1 1 0 01-2 0v-5h2zm-6.44-2.83a.76.76 0 00-.18-.09.6.6 0 00-.19-.06 1 1 0 00-.9.27A1.05 1.05 0 0012 17a1 1 0 00.07.38 1.19 1.19 0 00.22.33 1.15 1.15 0 00.33.21.94.94 0 00.76 0 1.15 1.15 0 00.33-.21A1 1 0 0014 17a1.05 1.05 0 00-.29-.71 1.58 1.58 0 00-.15-.12zm.14-3.88a1 1 0 00-1.62.33A1 1 0 0013 14a1 1 0 001-1 1 1 0 00-.08-.38.91.91 0 00-.22-.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgReceipt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
