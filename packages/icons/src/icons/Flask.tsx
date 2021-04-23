import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFlask(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.11 17.49L15 8.73V4h1a1 1 0 000-2H8a1 1 0 000 2h1v4.73l-5.11 8.76A3 3 0 006.48 22h11a3 3 0 002.59-4.51zm-9.25-8A1 1 0 0011 9V4h2v5a1 1 0 00.14.5L14 11h-4zm7.52 10a1 1 0 01-.86.5h-11a1 1 0 01-.86-.5 1 1 0 010-1L8.83 13h6.35l3.2 5.5a1 1 0 010 1zM10 15a1 1 0 101 1 1 1 0 00-1-1zm4 1a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFlask);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
