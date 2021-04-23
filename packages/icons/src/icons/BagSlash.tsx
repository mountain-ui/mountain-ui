import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBagSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-3V5a2 2 0 00-2-2h-4a1.86 1.86 0 00-.61.1 1 1 0 00-.64 1.27A1 1 0 0010 5h4v1h-1.34a1 1 0 000 2H19a1 1 0 011 1v1.28l-2.57.86a1 1 0 00-.63 1.27 1 1 0 00.95.68 1.19 1.19 0 00.32-.05l1.93-.65v2.95a1 1 0 102 0V9a3 3 0 00-3-3zM3.71 2.29a1 1 0 00-1.42 1.42L4.62 6A3 3 0 002 9v9a3 3 0 003 3h14a3.07 3.07 0 00.53-.06l.76.77a1 1 0 001.42 0 1 1 0 000-1.42zM4 9a1 1 0 011-1h1.59l4 4H9.16L4 10.28zm1 10a1 1 0 01-1-1v-5.61L8.68 14A1.19 1.19 0 009 14h3.59l5 5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBagSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
