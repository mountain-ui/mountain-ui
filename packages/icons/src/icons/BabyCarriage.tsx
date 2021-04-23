import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBabyCarriage(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 16a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM9 16a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM22 8.5A6.51 6.51 0 0015.5 2H15a1 1 0 00-1 1v5H7.52L6.27 4.65A1 1 0 005.33 4H3a1 1 0 000 2h1.64l1.25 3.37.51 1.37v.09A6.44 6.44 0 0012.5 15h3A6.49 6.49 0 0022 8.5zm-3.32 3.18A4.47 4.47 0 0115.5 13h-3a4.47 4.47 0 01-4.16-2.8.14.14 0 010-.06L8.26 10h11.48a4.32 4.32 0 01-1.06 1.68zM16 8V4a4.49 4.49 0 014 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBabyCarriage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
