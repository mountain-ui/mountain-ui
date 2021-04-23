import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGoogleDriveAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 14.44a.62.62 0 000-.13.61.61 0 010-.12l-.05-.12-6-10.29a1 1 0 00-.95-.49H9a1 1 0 00-.5.13l-.11.08a.73.73 0 00-.09.08.58.58 0 00-.1.12l-.06.08-6 10.33a1 1 0 000 1l3 5.08a.83.83 0 00.11.15v.06a1.1 1.1 0 00.44.26.83.83 0 00.22 0H18a1 1 0 00.86-.49l3-5.14.05-.12a.61.61 0 010-.12.53.53 0 000-.13.51.51 0 000-.13.59.59 0 00.09-.09zM6 17.73l-1.79-3.1L9 6.27l.87 1.5 1 1.66L7 15.91zm6-6.32l1.26 2.16h-2.54zm5.43 7.3H7.7l1.84-3.14h9.72zm-1.86-5.14l-4.83-8.28h3.69l4.83 8.28z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGoogleDriveAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
