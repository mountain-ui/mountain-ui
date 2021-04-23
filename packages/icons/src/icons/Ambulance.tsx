import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAmbulance(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.5 9.5h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm12.43 2.15l-.06-.11a.61.61 0 00-.07-.14l-2.4-3.2A3 3 0 0018 7h-2V6a3 3 0 00-3-3H4a3 3 0 00-3 3v11a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1v-5a1 1 0 00-.07-.35zM6 19a1 1 0 111-1 1 1 0 01-1 1zm8-3H8.22a3 3 0 00-4.44 0H3V6a1 1 0 011-1h9a1 1 0 011 1zm2-7h2a1 1 0 01.8.4L20 11h-4zm2 10a1 1 0 111-1 1 1 0 01-1 1zm3-3h-.78a3 3 0 00-4.22-.22V13h5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAmbulance);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
