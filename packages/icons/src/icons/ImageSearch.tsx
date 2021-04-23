import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageSearch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.17 3.17L15.45 20zm13-1a1 1 0 01-.18.54L13.31 15l.7-.69a.77.77 0 011.1 0L18 17.22zm3.71-8.71L20 8.57a4.31 4.31 0 10-6.72.79 4.27 4.27 0 003 1.26 4.34 4.34 0 002.29-.62l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM18 8a2.32 2.32 0 110-3.27A2.32 2.32 0 0118 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageSearch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
