import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMicrophoneSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.5 3.73a2 2 0 012.95-.14A2 2 0 0114 5v3.41a1 1 0 002 0V5a4 4 0 00-7-2.53 1 1 0 101.5 1.26zm8.22 9.54h.2a1 1 0 001-.81A7.91 7.91 0 0020 11a1 1 0 00-2 0 5.54 5.54 0 01-.11 1.1 1 1 0 00.83 1.17zm3 6.06l-18-18a1 1 0 00-1.42 0 1 1 0 000 1.41L8 8.48V11a4 4 0 006 3.46l1.46 1.46A6 6 0 016 11a1 1 0 00-2 0 8 8 0 007 7.93V21H9a1 1 0 000 2h6a1 1 0 000-2h-2v-2.07a7.87 7.87 0 003.85-1.59l3.4 3.4a1 1 0 001.42-1.41zM12 13a2 2 0 01-2-2v-.52l2.45 2.46A1.74 1.74 0 0112 13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMicrophoneSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
