import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapMarkerMinus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 9.45h-4a1 1 0 000 2h4a1 1 0 000-2zm6.46.18A8.5 8.5 0 106 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerMinus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
