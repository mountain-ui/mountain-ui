import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgIntercomAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.991 15a1 1 0 001-1V6a1 1 0 10-2 0v8a1 1 0 001 1zm4 0a1 1 0 001-1V6a1 1 0 10-2 0v8a1 1 0 001 1zm-8-2a1 1 0 001-1V8a1 1 0 00-2 0v4a1 1 0 001 1zm14-12h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1zm-3.643-4.591A8.82 8.82 0 0111.99 17a8.987 8.987 0 01-5.356-1.591 1 1 0 10-1.287 1.53A10.8 10.8 0 0011.99 19a10.8 10.8 0 006.644-2.06 1 1 0 00-1.287-1.531zM17.99 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgIntercomAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
