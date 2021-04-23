import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEdit(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 12a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 000-2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zm-15 .76V17a1 1 0 001 1h4.24a1 1 0 00.71-.29l6.92-6.93L21.71 8a1 1 0 000-1.42l-4.24-4.29a1 1 0 00-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 00-.29.71zm10.76-8.35l2.83 2.83-1.42 1.42-2.83-2.83zM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEdit);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
