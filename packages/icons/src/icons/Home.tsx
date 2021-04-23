import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgHome(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.66 10.25l-9-8a1 1 0 00-1.32 0l-9 8a1 1 0 00-.27 1.11A1 1 0 003 12h1v9a1 1 0 001 1h14a1 1 0 001-1v-9h1a1 1 0 00.93-.64 1 1 0 00-.27-1.11zM13 20h-2v-3a1 1 0 012 0zm5 0h-3v-3a3 3 0 00-6 0v3H6v-8h12zM5.63 10L12 4.34 18.37 10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHome);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
