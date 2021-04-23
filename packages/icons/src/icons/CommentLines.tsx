import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCommentLines(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 9H7a1 1 0 000 2h10a1 1 0 000-2zm-4 4H7a1 1 0 000 2h6a1 1 0 000-2zM12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentLines);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
