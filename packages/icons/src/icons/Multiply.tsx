import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMultiply(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.41 12l6.3-6.29a1 1 0 10-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 000 1.42 1 1 0 001.42 0l6.29-6.3 6.29 6.3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMultiply);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
