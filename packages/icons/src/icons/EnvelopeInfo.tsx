import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 13.5a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V8.91l5.88 5.88a3 3 0 004.24 0l3.59-3.58a1 1 0 00-1.42-1.42l-3.58 3.59a1 1 0 01-1.42 0L5.41 7.5H17a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm0-9a1.05 1.05 0 00.71-.29l.12-.16a.56.56 0 00.09-.17.64.64 0 00.08-.18 1.36 1.36 0 000-.2 1.05 1.05 0 00-.29-.71 1 1 0 00-1.42 0 1 1 0 000 1.42 1.05 1.05 0 00.71.29zm0 1a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
