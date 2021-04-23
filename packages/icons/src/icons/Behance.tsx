import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBehance(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.07 6.35H15v1.41h5.09zM19 16.05a2.23 2.23 0 01-1.3.37 2.23 2.23 0 01-1.7-.54 2.49 2.49 0 01-.62-1.76H22a6.47 6.47 0 00-.17-2 5.08 5.08 0 00-.8-1.73 4.17 4.17 0 00-1.42-1.21 4.37 4.37 0 00-2-.45 4.88 4.88 0 00-1.9.37 4.51 4.51 0 00-1.47 1 4.4 4.4 0 00-.95 1.52 5.4 5.4 0 00-.33 1.91 5.52 5.52 0 00.32 1.94 4.46 4.46 0 00.88 1.53 4 4 0 001.46 1 5.2 5.2 0 001.94.34 4.77 4.77 0 002.64-.7 4.21 4.21 0 001.63-2.35h-2.21a1.54 1.54 0 01-.62.76zm-3.43-4.12a1.87 1.87 0 011-1.14 2.28 2.28 0 011-.2 1.73 1.73 0 011.36.49 2.91 2.91 0 01.63 1.45h-4.15a3 3 0 01.11-.6zm-5.29-.48a3.06 3.06 0 001.28-1 2.72 2.72 0 00.43-1.58 3.28 3.28 0 00-.29-1.48 2.4 2.4 0 00-.82-1 3.24 3.24 0 00-1.27-.52 7.54 7.54 0 00-1.64-.16H2v12.58h6.1a6.55 6.55 0 001.65-.21 4.55 4.55 0 001.43-.65 3.13 3.13 0 001-1.14 3.41 3.41 0 00.37-1.65 3.47 3.47 0 00-.57-2 3 3 0 00-1.75-1.19zM4.77 7.86h2.59a4.17 4.17 0 01.71.06 1.64 1.64 0 01.61.22 1.05 1.05 0 01.42.44 1.42 1.42 0 01.16.72 1.36 1.36 0 01-.47 1.15 2 2 0 01-1.22.35h-2.8zm4.84 7.44a1.28 1.28 0 01-.45.5 2 2 0 01-.65.26 3.33 3.33 0 01-.78.08h-3v-3.45h3a2.4 2.4 0 011.45.41 1.65 1.65 0 01.54 1.39 1.77 1.77 0 01-.11.81z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBehance);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
