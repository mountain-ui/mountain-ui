import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.5 7.44V6.26a3 3 0 10-6 0v1.18a3 3 0 00-2 2.82v2a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-2-2.82zm-4-1.18a1 1 0 112 0v1h-2zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1zm0 5a1 1 0 00-1 1v1a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a1 1 0 001.42-1.41L4.91 8.26h5.59a1 1 0 000-2h-6a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-1a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeLock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
