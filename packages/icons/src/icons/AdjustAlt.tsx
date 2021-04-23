import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgAdjustAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.83 7.32a.2.2 0 000-.08 10 10 0 00-3.38-3.65A9.89 9.89 0 0012 2a1 1 0 00-1 1v18a1 1 0 001 1h.28a10 10 0 008.55-14.68zM13 4.06a8 8 0 012.49.74L13 9.12zm0 9.06l4.17-7.22a7.89 7.89 0 011.58 1.83L13 17.69zm1.16 6.57L19.75 10a8.36 8.36 0 01.25 2 7.94 7.94 0 01-5.84 7.69z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdjustAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
