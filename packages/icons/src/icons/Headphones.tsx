import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeadphones(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 3A10 10 0 002 13v7a1 1 0 001 1h3a3 3 0 003-3v-2a3 3 0 00-3-3H4a8 8 0 0116 0h-2a3 3 0 00-3 3v2a3 3 0 003 3h3a1 1 0 001-1v-7A10 10 0 0012 3zM6 15a1 1 0 011 1v2a1 1 0 01-1 1H4v-4zm14 4h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeadphones);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
