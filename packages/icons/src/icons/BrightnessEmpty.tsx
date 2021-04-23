import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBrightnessEmpty(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 11.29L19.36 9V5.64a1 1 0 00-1-1h-3.31l-2.34-2.35a1 1 0 00-1.42 0L9 4.64H5.64a1 1 0 00-1 1V9l-2.35 2.29a1 1 0 000 1.42l2.35 2.34v3.31a1 1 0 001 1H9l2.34 2.35a1 1 0 001.42 0l2.34-2.35h3.31a1 1 0 001-1v-3.31l2.35-2.34a1 1 0 00-.05-1.42zm-4.05 2.64a1 1 0 00-.3.71v2.72h-2.72a1 1 0 00-.71.3L12 19.59l-1.93-1.93a1 1 0 00-.71-.3H6.64v-2.72a1 1 0 00-.3-.71L4.41 12l1.93-1.93a1 1 0 00.3-.71V6.64h2.72a1 1 0 00.71-.3L12 4.41l1.93 1.93a1 1 0 00.71.3h2.72v2.72a1 1 0 00.3.71L19.59 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBrightnessEmpty);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
