import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudDownload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.29 17.29L13 18.59V13a1 1 0 00-2 0v5.59l-1.29-1.3a1 1 0 00-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 00-1.42-1.42zm4.13-11.07A7 7 0 005.06 8.11 4 4 0 006 16a1 1 0 000-2 2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.24 5.84 1 1 0 10.5 1.94 5 5 0 00.17-9.62z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudDownload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
