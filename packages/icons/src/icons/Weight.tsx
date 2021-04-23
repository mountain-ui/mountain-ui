import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWeight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 4h-1.45A3.08 3.08 0 0017 3a3 3 0 00-2.25-1H9.27A3 3 0 007 3a3.08 3.08 0 00-.57 1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-10.48.34A1 1 0 019.27 4h5.46a1 1 0 01.75.34 1 1 0 01.25.78l-.5 4a1 1 0 01-1 .88h-1.64l1.14-2.4a1 1 0 00-1.8-.86L10.37 10h-.6a1 1 0 01-1-.88l-.5-4a1 1 0 01.25-.78zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h1.37l.42 3.37a3 3 0 003 2.63h4.46a3 3 0 003-2.63L17.63 6H19a1 1 0 011 1zm-6-3h-4a1 1 0 000 2h4a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWeight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
