import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCar(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.62 13.08a.9.9 0 00-.54.54 1 1 0 001.3 1.3 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33A.84.84 0 008 14a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21zm13.14-4L18.4 5.05a3 3 0 00-2.84-2H8.44a3 3 0 00-2.84 2L4.24 9.11A3 3 0 002 12v4a3 3 0 002 2.82V20a1 1 0 002 0v-1h12v1a1 1 0 002 0v-1.18A3 3 0 0022 16v-4a3 3 0 00-2.24-2.89zM7.49 5.68A1 1 0 018.44 5h7.12a1 1 0 011 .68L17.61 9H6.39zM20 16a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h14a1 1 0 011 1zm-3.38-2.92a.9.9 0 00-.54.54 1 1 0 001.3 1.3.9.9 0 00.54-.54A.84.84 0 0018 14a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21zM13 13h-2a1 1 0 000 2h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCar);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
