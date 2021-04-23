import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 8a1 1 0 002 0V7h1a1 1 0 000-2H7V4a1 1 0 00-2 0v1H4a1 1 0 000 2h1zm13-3h-6a1 1 0 000 2h6a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h8.36l3 2.73A1 1 0 0020 21a1.1 1.1 0 00.4-.08A1 1 0 0021 20V8a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAdd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
