import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBrain(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 11a4 4 0 00-2-3.48A3 3 0 0020 7a3 3 0 00-3-3h-.18A3 3 0 0012 2.78 3 3 0 007.18 4H7a3 3 0 00-3 3 3 3 0 000 .52 4 4 0 00-.55 6.59A4 4 0 007 20h.18A3 3 0 0012 21.22 3 3 0 0016.82 20H17a4 4 0 003.5-5.89A4 4 0 0022 11zM11 8.55a4.72 4.72 0 00-.68-.32 1 1 0 00-.64 1.9A2 2 0 0111 12v1.55a4.72 4.72 0 00-.68-.32 1 1 0 00-.64 1.9A2 2 0 0111 17v2a1 1 0 01-1 1 1 1 0 01-.91-.6 4.07 4.07 0 00.48-.33 1 1 0 10-1.28-1.54A2 2 0 017 18a2 2 0 01-2-2 2 2 0 01.32-1.06A3.82 3.82 0 006 15a1 1 0 000-2 1.84 1.84 0 01-.69-.13A2 2 0 015 9.25a3.1 3.1 0 00.46.35 1 1 0 101-1.74.9.9 0 01-.34-.33A.92.92 0 016 7a1 1 0 011-1 .76.76 0 01.21 0 3.85 3.85 0 00.19.47 1 1 0 001.37.37 1 1 0 00.36-1.34A1.06 1.06 0 019 5a1 1 0 012 0zm7.69 4.32A1.84 1.84 0 0118 13a1 1 0 000 2 3.82 3.82 0 00.68-.06A2 2 0 0119 16a2 2 0 01-2 2 2 2 0 01-1.29-.47 1 1 0 00-1.28 1.54 4.07 4.07 0 00.48.33 1 1 0 01-.91.6 1 1 0 01-1-1v-2a2 2 0 011.32-1.87 1 1 0 00-.64-1.9 4.72 4.72 0 00-.68.32V12a2 2 0 011.32-1.87 1 1 0 00-.64-1.9 4.72 4.72 0 00-.68.32V5a1 1 0 012 0 1.06 1.06 0 01-.13.5 1 1 0 00.36 1.37 1 1 0 001.37-.37 3.85 3.85 0 00.19-.5.76.76 0 01.21 0 1 1 0 011 1 1 1 0 01-.17.55.9.9 0 01-.33.31 1 1 0 001 1.74 2.66 2.66 0 00.5-.35 2 2 0 01-.27 3.62z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBrain);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
