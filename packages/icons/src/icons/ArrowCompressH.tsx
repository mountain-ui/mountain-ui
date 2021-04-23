import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgArrowCompressH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm-1.29 6.29l-2.5-2.5a1 1 0 10-1.42 1.42l.8.79H3a1 1 0 000 2h4.59l-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l2.5-2.5a1 1 0 00.21-.33.94.94 0 000-.76 1 1 0 00-.21-.33zM21 11h-4.59l.8-.79a1 1 0 00-1.42-1.42l-2.5 2.5a1 1 0 000 1.42l2.5 2.5a1 1 0 001.42 0 1 1 0 000-1.42l-.8-.79H21a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowCompressH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
