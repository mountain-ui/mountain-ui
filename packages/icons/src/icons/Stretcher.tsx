import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStretcher(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 4.5h3a1 1 0 000-2h-3a1 1 0 000 2zm3 2H3a1 1 0 00-1 1v4a1 1 0 001 1h1.55l5.11 2.56-2.58 1.29A3 3 0 005 15.5a3 3 0 103 3 2.2 2.2 0 000-.36l3.94-2 4.06 2.1a2.3 2.3 0 000 .26 3 3 0 103-3 3 3 0 00-2.15.92l-2.72-1.36 5.11-2.56H21a1 1 0 001-1v-4a1 1 0 00-1-1zm-16 13a1 1 0 111-1 1 1 0 01-1 1zm14-2a1 1 0 11-1 1 1 1 0 011-1zm-7.1-3.56L9 12.5h5.75zM20 10.5H4v-2h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStretcher);
export default ForwardRef;
