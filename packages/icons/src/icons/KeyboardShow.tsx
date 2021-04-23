import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgKeyboardShow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.71 10.29A1 1 0 005 11a1 1 0 101.92-.38 1 1 0 00-.21-.33zm2.58-2.58A1 1 0 0010 8a1 1 0 00.71-.29 1.15 1.15 0 00.21-.33A1 1 0 0011 7a1.05 1.05 0 00-.29-.71l-.15-.12-.18-.09a.6.6 0 00-.19-.08 1 1 0 00-.9.27 1 1 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.35zM6.56 6.17a.76.76 0 00-.18-.09L6.2 6a1 1 0 00-.91.27 1 1 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33 1.15 1.15 0 00.33.21A.84.84 0 006 8a1 1 0 00.71-.29 1.15 1.15 0 00.21-.33A1 1 0 007 7a1.05 1.05 0 00-.29-.71zm6.15 12.12a1 1 0 00-1.42 0l-2 2a1 1 0 001.42 1.42l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42zm6-8a1 1 0 00-1.42 0 1 1 0 00-.21.33 1 1 0 001.3 1.3 1.15 1.15 0 00.33-.21A1 1 0 0019 11a.84.84 0 00-.08-.38 1 1 0 00-.21-.33zM14 10h-4a1 1 0 000 2h4a1 1 0 000-2zm6-8H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V5a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1zm-3.38-6.92a.93.93 0 00-.33.21A1.05 1.05 0 0017 7a1 1 0 00.08.38 1.15 1.15 0 00.21.33A1 1 0 0018 8a1 1 0 00.71-.29 1.15 1.15 0 00.21-.33A1 1 0 0019 7a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21zm-3.06.09l-.18-.09L14.2 6a1 1 0 00-.58.06.93.93 0 00-.33.21 1 1 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33A1 1 0 0014 8a1 1 0 00.71-.29 1.15 1.15 0 00.21-.33A1 1 0 0015 7a1.05 1.05 0 00-.29-.71z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeyboardShow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
