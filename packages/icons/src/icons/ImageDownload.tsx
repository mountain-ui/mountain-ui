import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgImageDownload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.71 6.29a1 1 0 00-1.42 0L20 7.59V2a1 1 0 00-2 0v5.59l-1.29-1.3a1 1 0 00-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 000-1.42zM19 13a1 1 0 00-1 1v.38l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.48a2.85 2.85 0 00-3.93 0L4 12.6V7a1 1 0 011-1h8a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.3 4.3zm13-1a.89.89 0 01-.18.53L13.31 15l.7-.7a.77.77 0 011.1 0L18 17.21z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageDownload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
