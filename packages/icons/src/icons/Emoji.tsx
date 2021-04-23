import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEmoji(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 11a1 1 0 10-1-1 1 1 0 001 1zm-6 0a1 1 0 10-1-1 1 1 0 001 1zm3-9a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4.28-7.12a1 1 0 00-1.4-.16A2.78 2.78 0 0014 14h-3.65a2.81 2.81 0 00-.88-1.31 1 1 0 00-1.36.2 1 1 0 00.14 1.39 1 1 0 01.25.72 1.09 1.09 0 01-.25.72 1 1 0 101.25 1.56 2.89 2.89 0 00.84-1.28H14a2.72 2.72 0 00.89 1.31 1 1 0 00.57.18 1 1 0 00.78-.38 1 1 0 00-.14-1.39 1 1 0 01-.25-.72 1.09 1.09 0 01.25-.72 1 1 0 00.18-1.4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEmoji);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
