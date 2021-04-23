import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgThunderstormMoon(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.58 16.5h-1.26l.86-1.5a1 1 0 10-1.73-1l-1.73 3a1 1 0 00.86 1.5h1.27L9 20a1 1 0 001.74 1l1.73-3a1 1 0 000-1 1 1 0 00-.89-.5zM21.7 7.57a1 1 0 00-.93-.26 3.2 3.2 0 01-.66.08 3 3 0 01-3-3 3 3 0 01.08-.65A1 1 0 0016 2.53a4.93 4.93 0 00-3.83 4.21 6.24 6.24 0 00-1.67-.24 6 6 0 00-5.94 5.13 3.49 3.49 0 00-.34 6.62 1 1 0 10.72-1.86 1.5 1.5 0 01.56-2.89 1 1 0 001-1 4 4 0 014-4 3.92 3.92 0 012.18.66 4 4 0 011.57 2 1 1 0 00.78.67 2.33 2.33 0 01.25 4.53 1 1 0 00.27 2 .84.84 0 00.27 0A4.33 4.33 0 0019 14.17a4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.5a1 1 0 00-.3-.93zm-4.59 2.82a2.61 2.61 0 01-.42 0A4.6 4.6 0 0016 10a6 6 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.09z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThunderstormMoon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
