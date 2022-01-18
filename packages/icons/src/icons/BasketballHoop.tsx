import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBasketballHoop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 10H6a1 1 0 000 2h1v9a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-9h1a1 1 0 000-2zm-7 8H9v-2h2zm0-4H9v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm5-12H4a3 3 0 00-3 3v8a3 3 0 003 3 1 1 0 000-2 1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1 1 1 0 000 2 3 3 0 003-3V5a3 3 0 00-3-3zm-6 6a1 1 0 000-2h-4a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBasketballHoop);
export default ForwardRef;
