import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgHospitalSquareSign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 6a1 1 0 00-1 1v4h-4V7a1 1 0 00-2 0v10a1 1 0 002 0v-4h4v4a1 1 0 002 0V7a1 1 0 00-1-1zm4-4H5a3.003 3.003 0 00-3 3v14a3.003 3.003 0 003 3h14a3.003 3.003 0 003-3V5a3.003 3.003 0 00-3-3zm1 17a1.001 1.001 0 01-1 1H5a1.001 1.001 0 01-1-1V5a1.001 1.001 0 011-1h14a1.001 1.001 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHospitalSquareSign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
