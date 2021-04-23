import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudTimes(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 8.22a7 7 0 00-13.36 1.89A4 4 0 006 18a1 1 0 000-2 2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.24 5.84 1 1 0 00.5 1.94 5 5 0 00.17-9.62zm-3.71 6.07a1 1 0 00-1.42 0L12 15.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 17l1.3-1.29a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudTimes);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
