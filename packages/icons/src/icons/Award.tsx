import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgAward(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.87 17.25l-2.71-4.68A6.9 6.9 0 0019 9.25a7 7 0 00-14 0 6.9 6.9 0 00.84 3.32l-2.71 4.68a1 1 0 00.87 1.5h2.87l1.46 2.46a1 1 0 00.18.22 1 1 0 00.69.28h.14a1 1 0 00.73-.49L12 17.9l1.93 3.35a1 1 0 00.73.48h.14a1 1 0 00.7-.28.87.87 0 00.17-.21l1.46-2.46H20a1 1 0 00.87-.5 1 1 0 000-1.03zM9.19 18.78l-.89-1.49a1 1 0 00-.85-.49H5.72l1.43-2.48a7 7 0 003.57 1.84zM12 14.25a5 5 0 115-5 5 5 0 01-5 5zm4.55 2.55a1 1 0 00-.85.49l-.89 1.49-1.52-2.65a7.06 7.06 0 003.56-1.84l1.43 2.48z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAward);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
