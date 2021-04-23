import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgClouds(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.47 10.54A6 6 0 0014 7a5.82 5.82 0 00-1.39.18 5 5 0 00-9 2A3 3 0 004.5 15h1a4 4 0 000 .5A3.5 3.5 0 009 19h9.17a4.33 4.33 0 001.3-8.46zM4.5 13a1 1 0 010-2 1 1 0 001-1 3 3 0 013-3 3 3 0 012.22 1 6 6 0 00-2.66 4.13 3.49 3.49 0 00-1.5.87zm13.67 4H9a1.5 1.5 0 010-3 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.33 2.33 0 01-.39 4.62z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClouds);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
