import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageBroken(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 14.54L19.21 12a1 1 0 00-1.42 0L15 14.84 12.21 12a1 1 0 00-1.42 0L8.5 14.34 6.21 12a1 1 0 00-1.42 0l-2.5 2.5a1 1 0 00-.21.33 1 1 0 00-.08.38V19a3 3 0 003 3h14a3 3 0 003-3v-3.75a1 1 0 00-.08-.38 1 1 0 00-.21-.33zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-3.34l1.5-1.5 2.29 2.3a1 1 0 001.42 0l2.29-2.3L14.29 17a1 1 0 001.42 0l2.79-2.8 1.5 1.5zM19 2H5a3 3 0 00-3 3v5.26a1.17 1.17 0 000 .27v.1a1 1 0 001.66.31L5.5 9.16l2.29 2.3a1 1 0 001.42 0l2.29-2.3L14.29 12a1 1 0 001.42 0l2.79-2.8 1.77 1.78a1 1 0 001.66-.31.28.28 0 000-.09.88.88 0 00.06-.28V5A3 3 0 0019 2zm1 5.84L19.21 7a1 1 0 00-1.42 0L15 9.84 12.21 7a1 1 0 00-1.42 0L8.5 9.34 6.21 7a1 1 0 00-1.42 0L4 7.84V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageBroken);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
