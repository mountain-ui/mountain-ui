import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSignin(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 12a1 1 0 00-1-1h-7.59l2.3-2.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.42 0 1 1 0 000-1.42L11.41 13H19a1 1 0 001-1zM17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-3a1 1 0 00-2 0v3a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 002 0V5a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignin);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
