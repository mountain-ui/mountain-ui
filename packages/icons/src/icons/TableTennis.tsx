import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTableTennis(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.71 16.1l-1.64-1.64a.94.94 0 01-.22-1.07 5.78 5.78 0 00.54-2.39.36.36 0 000-.1 5.74 5.74 0 00-1.06-3.34 14.17 14.17 0 00-5.17-4.42 7 7 0 00-8 1.31l-.67.67a7 7 0 00-1.31 8.05l.1.17a3 3 0 00-.84 2.06A3 3 0 007 17.94c.18.14.34.29.52.42a5.55 5.55 0 001.22.64h.09c.18.07.37.13.57.19h.15a5.08 5.08 0 00.95.15h.62c.21 0 .41 0 .62-.06h.17a5.46 5.46 0 001.42-.45 1 1 0 011.07.21l1.46 1.46a3.4 3.4 0 002.39 1 2.85 2.85 0 002-.85l.38-.38a3 3 0 00.08-4.17zm-15.3.32a1 1 0 111-1 1 1 0 01-1 1zm3.1.14l-.26-.2a2.94 2.94 0 00.16-.94 3 3 0 00-3-3h-.38l-.09-.16a5 5 0 01.93-5.75l.67-.67A5 5 0 0112.28 5a12 12 0 014.26 3.57zm10.78 2.37l-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3 3 0 00-3.34-.61 3.39 3.39 0 01-1 .31 2.84 2.84 0 01-.58.05H10.49l6.87-6.87a3.8 3.8 0 01-.34 2 3 3 0 00.61 3.34l1.64 1.65a1 1 0 01.02 1.4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTableTennis);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
