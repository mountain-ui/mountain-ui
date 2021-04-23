import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgPaperclip(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.08 12.42l-6.18 6.19a4.25 4.25 0 01-6-6l8-8a2.57 2.57 0 013.54 0 2.52 2.52 0 010 3.54l-6.9 6.89A.75.75 0 119.42 14l5.13-5.12a1 1 0 00-1.42-1.42L8 12.6a2.74 2.74 0 000 3.89 2.82 2.82 0 003.89 0l6.89-6.9a4.5 4.5 0 00-6.36-6.36l-8 8A6.25 6.25 0 0013.31 20l6.19-6.18a1 1 0 10-1.42-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPaperclip);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
