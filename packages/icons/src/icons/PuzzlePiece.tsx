import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPuzzlePiece(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 22H5a3 3 0 01-3-3V9a3 3 0 013-3h1a4 4 0 017.3-2.18A3.86 3.86 0 0114 6h3a1 1 0 011 1v3a4 4 0 012.18 7.3A3.86 3.86 0 0118 18v3a1 1 0 01-1 1zM5 8a1 1 0 00-1 1v10a1 1 0 001 1h11v-3.18a1 1 0 01.42-.82 1 1 0 01.91-.13 1.77 1.77 0 001.74-.23 2 2 0 00.93-1.37 2 2 0 00-.48-1.59 1.89 1.89 0 00-2.17-.55 1 1 0 01-.91-.13 1 1 0 01-.42-.82V8h-3.2a1 1 0 01-1-1.33 1.77 1.77 0 00-.23-1.74 1.94 1.94 0 00-3-.43A2 2 0 008 6a1.89 1.89 0 00.13.67A1 1 0 017.18 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPuzzlePiece);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
