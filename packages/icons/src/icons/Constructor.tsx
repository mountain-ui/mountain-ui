import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgConstructor(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 9.67V9.5a7.95 7.95 0 00-5.59-7.62h-.06a8.32 8.32 0 00-2.59-.36A8.21 8.21 0 004 9.67a3 3 0 000 5.66 8 8 0 008 7.17h.23a8.13 8.13 0 007.68-7.16A3 3 0 0020 9.67zM12.18 20.5a6 6 0 01-6.09-5h11.77a6.09 6.09 0 01-5.68 5zm6.82-7H5a1 1 0 010-2h2a1 1 0 000-2H6a6.4 6.4 0 013-5.15V7.5a1 1 0 002 0V3.59a7.34 7.34 0 01.82-.09H12a6.64 6.64 0 011 .09V7.5a1 1 0 002 0V4.32a6.65 6.65 0 011.18.87A6 6 0 0118 9.5h-1a1 1 0 000 2h2a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgConstructor);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
