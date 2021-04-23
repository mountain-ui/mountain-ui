import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCloudWifi(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 5.94a7.1 7.1 0 017 0 1 1 0 001.37-.37 1 1 0 00-.37-1.36 9.14 9.14 0 00-9 0 1 1 0 00-.37 1.36 1 1 0 001.37.37zm9.92 5.27a5.91 5.91 0 00-.36-.71 1 1 0 00-1.38-.33 1 1 0 00-.33 1.37 4.58 4.58 0 01.38.84 1 1 0 00.78.67A3 3 0 0120 16a3 3 0 01-3 3H5.66A2 2 0 014 17.4 2 2 0 016 15a1 1 0 001-1 4.92 4.92 0 01.67-2.49 1 1 0 00-.37-1.37 1 1 0 00-1.36.37 6.75 6.75 0 00-.88 2.6 4 4 0 00-2.13 1.33A4 4 0 005.46 21H17a5 5 0 001.42-9.79zM14.87 9v-.06a.92.92 0 00.13-.2 1 1 0 00-.57-1.29 6.36 6.36 0 00-1.74-.38h-.3a5.47 5.47 0 00-.81 0 3 3 0 00-.31 0 6.36 6.36 0 00-1.74.38A1 1 0 009 8.74a1.22 1.22 0 00.12.19.61.61 0 000 .11 1 1 0 001.37.36 3.08 3.08 0 013 0 1 1 0 001.38-.4zM11 12a1 1 0 101-1 1 1 0 00-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudWifi);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
