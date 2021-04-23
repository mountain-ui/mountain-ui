import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBorderAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.5 18.5a1 1 0 101 1 1 1 0 00-1-1zm9-15a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 002 0v-15h15a1 1 0 001-1zm-5 15a1 1 0 101 1 1 1 0 00-1-1zm-8 0a1 1 0 101 1 1 1 0 00-1-1zm12-12a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
