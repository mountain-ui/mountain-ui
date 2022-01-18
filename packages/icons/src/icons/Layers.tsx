import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLayers(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2.5 10.56l9 5.2a1 1 0 001 0l9-5.2a1 1 0 000-1.73l-9-5.2a1 1 0 00-1 0l-9 5.2a1 1 0 000 1.73zM12 5.65l7 4-7 4.05-7-4.01zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 00-1.37.36 1 1 0 00.37 1.37l9 5.2a1 1 0 001 0l9-5.2a1 1 0 00.37-1.37 1 1 0 00-1.37-.36z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLayers);
export default ForwardRef;
