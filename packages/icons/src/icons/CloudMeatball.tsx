import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudMeatball(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.5 15.92h-.77l.39-.67a1 1 0 00-1.74-1l-.38.67-.38-.67a1 1 0 00-1.74 1l.39.67H9.5a1 1 0 000 2h.77l-.39.66a1 1 0 001.74 1l.38-.66.38.66a1 1 0 001.74-1l-.39-.66h.77a1 1 0 000-2zm3.92-7.79A7 7 0 005.06 10 4 4 0 002 13.92a4 4 0 003.34 3.93h.16a1 1 0 00.16-2 2 2 0 01-1.66-2 2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66 3 3 0 01.62 5.72 1 1 0 10.74 1.85 5 5 0 00-.45-9.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudMeatball);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
