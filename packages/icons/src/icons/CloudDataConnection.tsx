import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCloudDataConnection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 18.5h-6.18A3 3 0 0013 16.68V13.5h3.17a4.33 4.33 0 001.3-8.5A6 6 0 006.06 6.63 3.5 3.5 0 007 13.5h4v3.18a3 3 0 00-1.82 1.82H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zm-14-7a1.5 1.5 0 010-3 1 1 0 001-1 4 4 0 017.79-1.29 1 1 0 00.78.67 2.31 2.31 0 011.93 2.29 2.34 2.34 0 01-2.33 2.33zm5 9a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudDataConnection);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
