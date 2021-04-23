import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMapMarkerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.46 9.63A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24zM12 6a4.5 4.5 0 104.5 4.5A4.51 4.51 0 0012 6zm0 7a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
