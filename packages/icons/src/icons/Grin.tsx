import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgGrin(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 11a1 1 0 10-1-1 1 1 0 001 1zm3-9a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3-7H9a1 1 0 00-1 1 4 4 0 008 0 1 1 0 00-1-1zm-3 3a2 2 0 01-1.73-1h3.46A2 2 0 0112 16zm3-7a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGrin);
export default ForwardRef;
