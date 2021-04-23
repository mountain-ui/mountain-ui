import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeHeart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.5 13a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 002.11.87 3 3 0 002.15-.9l.89-.88a1 1 0 00-1.4-1.39l-.93.91a1 1 0 01-1.4 0L4.91 7H9.5a1 1 0 000-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1.05-9a3.33 3.33 0 00-3.88-.54 3.25 3.25 0 00-3.88 5.13L17 11.71a1.05 1.05 0 00.71.29 1 1 0 00.71-.29l3.17-3.17A3.26 3.26 0 0021.55 4zm-1.41 3.12l-2.47 2.47-2.46-2.47A1.24 1.24 0 0117 5.36a1 1 0 001.42 0 1.28 1.28 0 011.76 0 1.26 1.26 0 01-.04 1.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeHeart);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
