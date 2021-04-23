import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgLinkBroken(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.76 10.59a1 1 0 00.26-2l-1.76-.44a1 1 0 10-.52 1.93l1.76.47a.78.78 0 00.26.04zM8.62 5a1 1 0 001 .74.82.82 0 00.26 0 1 1 0 00.7-1.22l-.47-1.76a1 1 0 10-1.93.52zm4.83 10A1 1 0 0012 15l-3.5 3.56a2.21 2.21 0 01-3.06 0 2.15 2.15 0 010-3.06L9 12a1 1 0 10-1.41-1.41L4 14.08A4.17 4.17 0 109.92 20l3.53-3.53a1 1 0 000-1.47zM5.18 6.59a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41L5.3 3.89A1 1 0 003.89 5.3zm16.08 7.33l-1.76-.47a1 1 0 10-.5 1.93l1.76.47h.26a1 1 0 00.26-2zM15.38 19a1 1 0 00-1.23-.7 1 1 0 00-.7 1.22l.47 1.76a1 1 0 001 .74 1.15 1.15 0 00.26 0 1 1 0 00.71-1.23zm3.44-1.57a1 1 0 00-1.41 1.41l1.29 1.29a1 1 0 001.41 0 1 1 0 000-1.41zM21.2 7a4.16 4.16 0 00-7.12-3l-3.53 3.56A1 1 0 1012 9l3.5-3.56a2.21 2.21 0 013.06 0 2.15 2.15 0 010 3.06L15 12a1 1 0 000 1.41 1 1 0 001.41 0L20 9.92A4.19 4.19 0 0021.2 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLinkBroken);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
