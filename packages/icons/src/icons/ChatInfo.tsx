import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChatInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.29 3.71a1 1 0 001.42 0 1.15 1.15 0 00.21-.33A1 1 0 0021 3a1 1 0 00-.29-.71l-.15-.12a.76.76 0 00-.18-.09 1 1 0 00-1.09.21A1 1 0 0019 3a1 1 0 00.08.38 1.15 1.15 0 00.21.33zM20 5a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1zm.06 8a1 1 0 00-1.11.87A7 7 0 0112 20H6.41l.64-.63a1 1 0 000-1.41A7 7 0 0112 6a6.91 6.91 0 013.49.94 1 1 0 001-1.72A8.84 8.84 0 0012 4a9 9 0 00-7 14.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 004 22h8a9 9 0 008.93-7.88 1 1 0 00-.87-1.12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChatInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
