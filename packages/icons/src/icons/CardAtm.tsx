import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCardAtm(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 4.5H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm1 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1h14a1 1 0 011 1zm-4-6a3 3 0 00-1.51.42 3 3 0 100 5.16A3 3 0 1016 10.5zm-2.83 4a1 1 0 01-.17 0 1 1 0 010-2 1 1 0 01.17 0 2.8 2.8 0 000 1.92zm2.83 0a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCardAtm);
export default ForwardRef;
