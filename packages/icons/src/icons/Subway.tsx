import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSubway(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 001 1zm2-15H6a3 3 0 00-3 3v12a3 3 0 001.2 2.39l-.91.9a1 1 0 000 1.42 1 1 0 001.42 0L6.41 20h11.18l1.7 1.71a1 1 0 001.42 0 1 1 0 000-1.42l-.91-.9A3 3 0 0021 17V5a3 3 0 00-3-3zM5 8h6v4H5zm14 9a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14zm0-5h-6V8h6zm0-6H5V5a1 1 0 011-1h12a1 1 0 011 1zM8 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.1.18 1.36 1.36 0 000 .2 1 1 0 00.29.7A1 1 0 008 17z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSubway);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
