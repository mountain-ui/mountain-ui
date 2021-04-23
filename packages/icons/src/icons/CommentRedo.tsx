import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentRedo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 14a1 1 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41 7 7 0 013.2-11.74 1 1 0 00-.5-1.94A9 9 0 004 18.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm2-12a1 1 0 00-1 1 5 5 0 10.3 7.75 1 1 0 10-1.3-1.5A3 3 0 1117 4a3 3 0 012.23 1H18a1 1 0 000 2h3a1 1 0 001-1V3a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentRedo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
