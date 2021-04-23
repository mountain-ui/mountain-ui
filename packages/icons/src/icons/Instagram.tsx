import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgInstagram(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.34 5.46a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2zm4.6 2.42a7.59 7.59 0 00-.46-2.43 4.94 4.94 0 00-1.16-1.77 4.7 4.7 0 00-1.77-1.15 7.3 7.3 0 00-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 00-2.43.47 4.78 4.78 0 00-1.77 1.15 4.7 4.7 0 00-1.15 1.77 7.3 7.3 0 00-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 00.47 2.43 4.7 4.7 0 001.15 1.77 4.78 4.78 0 001.77 1.15 7.3 7.3 0 002.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 002.43-.47 4.7 4.7 0 001.77-1.15 4.85 4.85 0 001.16-1.77 7.59 7.59 0 00.46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12zM20.14 16a5.61 5.61 0 01-.34 1.86 3.06 3.06 0 01-.75 1.15 3.19 3.19 0 01-1.15.75 5.61 5.61 0 01-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 01-1.94-.3 3.27 3.27 0 01-1.1-.75 3 3 0 01-.74-1.15 5.54 5.54 0 01-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 01.35-1.9A3 3 0 015 5a3.14 3.14 0 011.1-.8A5.73 5.73 0 018 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 011.86.34 3.06 3.06 0 011.19.8 3.06 3.06 0 01.75 1.1 5.61 5.61 0 01.34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4zM12 6.87A5.13 5.13 0 1017.14 12 5.12 5.12 0 0012 6.87zm0 8.46A3.33 3.33 0 1115.33 12 3.33 3.33 0 0112 15.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgInstagram);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
