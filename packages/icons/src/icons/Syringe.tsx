import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSyringe(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 2.29a1 1 0 00-1.42 0l-2.12 2.12-.71-.7a1 1 0 00-1.41 0l-1.41 1.41-.71-.71a1 1 0 00-1.42 0l-7.77 7.78-.74-.7a1 1 0 00-1.38 1.41l3.53 3.54-1.73 1.74-.71-.72a1 1 0 00-1.42 1.42l2.83 2.83a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42l-.71-.7 1.74-1.74 3.53 3.53a1 1 0 00.71.3 1 1 0 00.7-1.71l-.7-.71 7.78-7.77a1 1 0 000-1.42l-.71-.71L20.29 8a1 1 0 000-1.41l-.7-.71 2.12-2.12a1 1 0 000-1.47zM7.57 15l-1.42-1.39 1.41-1.42L9 13.61zm2.82 2.83L9 16.44 10.39 15l1.42 1.42zM13.22 15L9 10.78l4.24-4.24.71.7 3.53 3.54zm4.24-7l-1.41-1.46.71-.71.7.7.7.7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSyringe);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
