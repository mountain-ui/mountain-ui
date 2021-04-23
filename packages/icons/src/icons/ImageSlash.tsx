import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgImageSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.5 4H10a1 1 0 000 2h9.5a1 1 0 011 1v6.76l-1.88-1.88a3 3 0 00-1.14-.71 1 1 0 10-.64 1.9.82.82 0 01.36.23l3.31 3.29a.66.66 0 000 .15.83.83 0 000 .15 1.18 1.18 0 00.13.18.48.48 0 00.09.11.9.9 0 00.2.14.6.6 0 00.11.06.91.91 0 00.37.08 1 1 0 001-1V7a3 3 0 00-2.91-3zM3.21 2.29a1 1 0 00-1.42 1.42L3.18 5.1A3 3 0 002.5 7v10a3 3 0 003 3h12.59l1.7 1.71a1 1 0 001.42 0 1 1 0 000-1.42zM4.5 7a1 1 0 01.12-.46l2.72 2.71a3 3 0 00-1 .63L4.5 11.76zm1 11a1 1 0 01-1-1v-2.42l3.3-3.29a1 1 0 011.4 0L15.91 18z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
