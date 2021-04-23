import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBrightness(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm.64 5l-.71.71a1 1 0 000 1.41 1 1 0 001.41 0l.71-.71A1 1 0 005.64 17zM12 5a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm5.66 2.34a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.66.71a1 1 0 000 1.41 1 1 0 00.66.29zm-12-.29a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.43 1.41zM21 11h-1a1 1 0 000 2h1a1 1 0 000-2zm-2.64 6A1 1 0 0017 18.36l.71.71a1 1 0 001.41 0 1 1 0 000-1.41zM12 6.5a5.5 5.5 0 105.5 5.5A5.51 5.51 0 0012 6.5zm0 9a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm0 3.5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBrightness);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
