import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeBlock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.5 13.26a5 5 0 10-3.5-1.47 5 5 0 003.5 1.47zm2.12-2.88a3 3 0 01-3.4.58l4-4a3 3 0 01-.6 3.42zm-4.24-4.24a3 3 0 012.12-.88 3 3 0 011.28.3l-4 4a3 3 0 01.6-3.42zm5.12 8.12a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 002.11.88 3 3 0 002.16-.91 1 1 0 000-1.39 1 1 0 00-1.43 0 1 1 0 01-1.4 0L4.91 8.26H9.5a1 1 0 000-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeBlock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
