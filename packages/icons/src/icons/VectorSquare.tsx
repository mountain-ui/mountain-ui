import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVectorSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 16.18V7.82A3 3 0 1016.18 4H7.82A3 3 0 104 7.82v8.36A3 3 0 107.82 20h8.36A3 3 0 1020 16.18zM19 4a1 1 0 11-1 1 1 1 0 011-1zM5 4a1 1 0 11-1 1 1 1 0 011-1zm0 16a1 1 0 111-1 1 1 0 01-1 1zm11.18-2H7.82A3 3 0 006 16.18V7.82A3 3 0 007.82 6h8.36A3 3 0 0018 7.82v8.36A3 3 0 0016.18 18zM19 20a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVectorSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
