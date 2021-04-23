import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeSend(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 10.5H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2l-2.88 2.88a1 1 0 01-1.4 0L8.42 12.5zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.87a2.94 2.94 0 002.12.89 3 3 0 002.12-.88L17 13.91zm-8-12h3.59l-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-2-2a1 1 0 00-1.42 1.42l.3.29H9a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeSend);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
