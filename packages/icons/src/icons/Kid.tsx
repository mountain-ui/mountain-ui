import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgKid(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 10a1 1 0 10-1 1 1 1 0 001-1zm4.5 4.06a1 1 0 00-1.37.36 1.3 1.3 0 01-2.26 0 1 1 0 00-1.37-.36 1 1 0 00-.37 1.36 3.31 3.31 0 005.74 0 1 1 0 00-.37-1.36zM15 9a1 1 0 101 1 1 1 0 00-1-1zm-3-7a10 10 0 1010 10A10 10 0 0012 2zm0 18A8 8 0 019 4.57 3 3 0 009 5a3 3 0 003 3 1 1 0 000-2 1 1 0 010-2 8 8 0 010 16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKid);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
