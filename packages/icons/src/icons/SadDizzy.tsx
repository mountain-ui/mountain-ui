import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSadDizzy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 11.71l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 00-1.46-1.42l-.29.3-.25-.3a1 1 0 10-1.46 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0zm-.6 3.62a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 001.41-.13 1 1 0 00-.13-1.4 5.81 5.81 0 00-7.32 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5-11.71a1 1 0 00-1.42 0l-.29.3-.29-.3a1 1 0 00-1.42 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSadDizzy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
