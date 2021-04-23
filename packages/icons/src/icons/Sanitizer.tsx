import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSanitizer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13 12a3 3 0 103 3 3.003 3.003 0 00-3-3zm0 4a1 1 0 111-1 1.001 1.001 0 01-1 1zm5.8-8.4L16 5.5V3h1a1 1 0 000-2H8.657a4.967 4.967 0 00-3.535 1.464l-.829.829a1 1 0 101.414 1.414l.829-.829A3.022 3.022 0 018.656 3H10v2.5L7.2 7.6A3.016 3.016 0 006 10v12a1 1 0 001 1h12a1 1 0 001-1V10a3.015 3.015 0 00-1.2-2.4zM12 3h2v2h-2zm6 18H8V10a1.006 1.006 0 01.4-.8L11.334 7h3.333L17.6 9.2a1.005 1.005 0 01.4.8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSanitizer);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
