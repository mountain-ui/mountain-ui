import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMoneyBill(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6 11a1 1 0 101 1 1 1 0 00-1-1zm12 0a1 1 0 101 1 1 1 0 00-1-1zm2-6H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1zm-9-7a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneyBill);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
