import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMoneybagAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M19 7h-3V6a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm-6 4a1 1 0 011-1h1a2 2 0 01-2 2zm1 9a1 1 0 01-1-1v-1a2 2 0 012 2zm15-1a1 1 0 01-1 1h-1a2 2 0 012-2zm0-3a4 4 0 00-4 4H8a4 4 0 00-4-4v-2a4 4 0 004-4h8a4 4 0 004 4zm0-4a2 2 0 01-2-2h1a1 1 0 011 1zm-8 0a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneybagAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
