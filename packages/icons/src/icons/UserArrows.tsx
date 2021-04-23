import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserArrows(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.64 15.772a3.468 3.468 0 00.86-2.272 3.5 3.5 0 00-7 0 3.468 3.468 0 00.86 2.272A4.988 4.988 0 0013 20a1 1 0 002 0 3 3 0 016 0 1 1 0 002 0 4.988 4.988 0 00-2.36-4.228zM18 15a1.5 1.5 0 111.5-1.5A1.502 1.502 0 0118 15zM6.793 7.707l2 2a1 1 0 001.414-1.414L9.914 8h4.172l-.293.293a1 1 0 101.414 1.414l2-2a1.004 1.004 0 000-1.414l-2-2a1 1 0 00-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 00-1.414-1.414l-2 2a1.004 1.004 0 000 1.414zm1.847 8.065A3.468 3.468 0 009.5 13.5a3.5 3.5 0 00-7 0 3.468 3.468 0 00.86 2.272A4.988 4.988 0 001 20a1 1 0 002 0 3 3 0 016 0 1 1 0 002 0 4.988 4.988 0 00-2.36-4.228zM6 15a1.5 1.5 0 111.5-1.5A1.502 1.502 0 016 15z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserArrows);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
