import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPresentationLine(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 14h-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v11H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12zm-9-2a1 1 0 00.83-.45l1.33-2 1.13 1.14a1 1 0 00.81.29 1 1 0 00.73-.45l2-3a1 1 0 00-1.66-1.1l-1.33 2-1.13-1.14A1 1 0 0010.9 7a1 1 0 00-.73.45l-2 3a1 1 0 00.28 1.38A.94.94 0 009 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPresentationLine);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
