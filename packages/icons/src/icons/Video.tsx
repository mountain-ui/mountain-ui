import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVideo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.53 7.15a1 1 0 00-1 0L17 8.89A3 3 0 0014 6H5a3 3 0 00-3 3v6a3 3 0 003 3h9a3 3 0 003-2.89l3.56 1.78A1 1 0 0021 17a1 1 0 00.53-.15A1 1 0 0022 16V8a1 1 0 00-.47-.85zM15 15a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h9a1 1 0 011 1zm5-.62l-3-1.5v-1.76l3-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVideo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
