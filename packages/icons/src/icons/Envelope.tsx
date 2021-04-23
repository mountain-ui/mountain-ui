import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelope(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1 1 0 01-1.42 0L5.41 6zM20 17a1 1 0 01-1 1H5a1 1 0 01-1-1V7.41l5.88 5.88a3 3 0 004.24 0L20 7.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelope);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
