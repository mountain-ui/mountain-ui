import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClinicMedical(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 12v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-1a1 1 0 00-2 0zm10.664-1.748l-9-8a.999.999 0 00-1.328 0l-9 8a1 1 0 001.328 1.496L4 11.449V21a1 1 0 001 1h14a1 1 0 001-1v-9.551l.336.299a1 1 0 001.328-1.496zM18 20H6V9.671l6-5.333 6 5.333z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClinicMedical);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
