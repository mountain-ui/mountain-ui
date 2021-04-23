import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgRss(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2.88 16.88a3 3 0 000 4.24 3 3 0 004.24 0 3 3 0 00-4.24-4.24zm2.83 2.83a1 1 0 01-1.42-1.42 1 1 0 011.42 0 1 1 0 010 1.42zM5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0 11.08 11.08 0 00-3.22-7.78A11.08 11.08 0 005 8zm10.61.39A15.11 15.11 0 005 4a1 1 0 000 2 13 13 0 0113 13 1 1 0 002 0 15.11 15.11 0 00-4.39-10.61z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRss);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
