import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgPlay(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.54 9L8.88 3.46a3.42 3.42 0 00-5.13 3v11.12A3.42 3.42 0 007.17 21a3.43 3.43 0 001.71-.46L18.54 15a3.42 3.42 0 000-5.92zm-1 4.19l-9.66 5.62a1.44 1.44 0 01-1.42 0 1.42 1.42 0 01-.71-1.23V6.42a1.42 1.42 0 01.71-1.23A1.51 1.51 0 017.17 5a1.54 1.54 0 01.71.19l9.66 5.58a1.42 1.42 0 010 2.46z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPlay);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
