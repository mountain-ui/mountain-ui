import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAdjustHalf(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.83 7.32a10.11 10.11 0 00-3.44-3.73A10 10 0 1012 22h.29a10 10 0 008.54-14.68zM11 19.93a8 8 0 010-15.86zm2-15.86a8.07 8.07 0 012.49.74L13 9.12zm0 9l4.17-7.17a8.14 8.14 0 011.58 1.83L13 17.69zm1.15 6.58L19.74 10a8.16 8.16 0 01.26 2 8 8 0 01-5.85 7.7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdjustHalf);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
