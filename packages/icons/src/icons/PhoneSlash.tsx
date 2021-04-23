import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgPhoneSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.91 13.1a1 1 0 00.85.47A1 1 0 006.61 12a17 17 0 01-2.47-6.85 1 1 0 01.24-.81A1 1 0 015.13 4h3a1 1 0 011 .8c0 .23.08.44.13.67v.13a10.33 10.33 0 00.47 1.54l-1.39.66a1 1 0 00-.52.57 1 1 0 000 .77c.1.21.2.42.32.64a1 1 0 001.37.37 1 1 0 00.5-.94l.57-.21a2 2 0 001.05-2.48 9.3 9.3 0 01-.39-1.3v-.1c0-.2-.08-.4-.11-.58A3 3 0 008.16 2h-3a3 3 0 00-2.28 1 3 3 0 00-.72 2.39 19.05 19.05 0 002.75 7.71zm14.61-.21l-.6-.11h-.08a9.31 9.31 0 01-1.33-.39 2 2 0 00-2.47 1l-.21.46a12.39 12.39 0 01-1.92-1.37l8.8-8.79a1 1 0 10-1.42-1.42l-18 18a1 1 0 000 1.42 1 1 0 001.42 0l4.59-4.6a19.09 19.09 0 0010.29 4.73 2.69 2.69 0 00.4 0 3 3 0 002-.75 3 3 0 001-2.25v-3a3 3 0 00-2.47-2.93zm.48 6a1 1 0 01-.34.75 1 1 0 01-.81.24 17.07 17.07 0 01-9.14-4.18l1.77-1.77a14.69 14.69 0 003.38 2.21 1 1 0 00.77 0 1 1 0 00.57-.52l.62-1.41a12 12 0 001.6.47h.11l.69.13a1 1 0 01.78 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPhoneSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
