import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgThunderstorm(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.5 15h-2.27l1.45-2.5a1 1 0 10-1.74-1l-2.31 4a1 1 0 000 1 1 1 0 00.87.5h2.27l-1.45 2.5a1 1 0 001.74 1l2.31-4a1 1 0 000-1 1 1 0 00-.87-.5zm4.92-7.79a7 7 0 00-13.36 1.9A4 4 0 006 17a1 1 0 000-2 2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 15a1 1 0 000 2 5 5 0 001.42-9.79z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThunderstorm);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
