import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCircuit(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 13a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm4 0a1 1 0 101 1 1 1 0 00-1-1zm7 4a1 1 0 000-2h-2V9h2a1 1 0 000-2h-2.18A3 3 0 0017 5.18V3a1 1 0 00-2 0v2h-2V3a1 1 0 00-2 0v2H9V3a1 1 0 00-2 0v2.18A3 3 0 005.18 7H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2.18A3 3 0 007 18.82V21a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2.18A3 3 0 0018.82 17H21a1 1 0 000-2h-2v-2zm-4 3a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8a1 1 0 011 1zm-3-3a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCircuit);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
