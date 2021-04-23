import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgServerNetworkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 6h3a1 1 0 000-2H8a1 1 0 000 2zm8 0a1 1 0 10-1-1 1 1 0 001 1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm5 9h-6.18A3 3 0 0013 17.18V15h4a3 3 0 003-3v-2a3 3 0 00-.78-2A3 3 0 0020 6V4a3 3 0 00-3-3H7a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 004 10v2a3 3 0 003 3h4v2.18A3 3 0 009.18 19H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM6 4a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1zm1 9a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1zm5 8a1 1 0 111-1 1 1 0 01-1 1zm-1-11H8a1 1 0 000 2h3a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgServerNetworkAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
