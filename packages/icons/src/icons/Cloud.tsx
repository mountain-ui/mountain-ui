import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCloud(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 9.21a7 7 0 00-13.36 1.9A4 4 0 006 19h11a5 5 0 001.42-9.79zM17 17H6a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 17z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloud);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
