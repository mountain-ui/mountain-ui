import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCog(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.32 9.55l-1.89-.63.89-1.78A1 1 0 0020.13 6L18 3.87a1 1 0 00-1.15-.19l-1.78.89-.63-1.89A1 1 0 0013.5 2h-3a1 1 0 00-.95.68l-.63 1.89-1.78-.89A1 1 0 006 3.87L3.87 6a1 1 0 00-.19 1.15l.89 1.78-1.89.63a1 1 0 00-.68.94v3a1 1 0 00.68.95l1.89.63-.89 1.78A1 1 0 003.87 18L6 20.13a1 1 0 001.15.19l1.78-.89.63 1.89a1 1 0 00.95.68h3a1 1 0 00.95-.68l.63-1.89 1.78.89a1 1 0 001.13-.19L20.13 18a1 1 0 00.19-1.15l-.89-1.78 1.89-.63a1 1 0 00.68-.94v-3a1 1 0 00-.68-.95zM20 12.78l-1.2.4A2 2 0 0017.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 00-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 008 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 00-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 006.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 002.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0016 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 001.16 2.79l1.2.4zM12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCog);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
