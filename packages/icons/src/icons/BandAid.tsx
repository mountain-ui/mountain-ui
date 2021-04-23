import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBandAid(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.82 11.29a1 1 0 000 1.42 1 1 0 001.41 0 1 1 0 000-1.42 1 1 0 00-1.41 0zm2.47 2.48a1 1 0 000 1.41 1 1 0 001.42 0 1 1 0 000-1.41 1 1 0 00-1.42 0zm9-10A6 6 0 0012 3.55a6 6 0 00-8.24.2A6 6 0 003.57 12 6 6 0 008 22a5.92 5.92 0 004-1.55 6 6 0 008.25-.2 6 6 0 00.18-8.25 6 6 0 00-.18-8.25zm-1.46 1.4a4 4 0 01.17 5.39L13.44 5a4.07 4.07 0 015.39.17zM5.17 18.83A4 4 0 015 13.44l5.6 5.6a4.08 4.08 0 01-5.43-.21zm13.66 0a4.08 4.08 0 01-5.64 0l-8-8a4 4 0 010-5.64 4 4 0 015.64 0l8 8a4 4 0 010 5.64zm-5.06-7.54a1 1 0 000 1.42 1 1 0 001.41 0 1 1 0 000-1.42 1 1 0 00-1.41 0zm-2.48-2.47a1 1 0 000 1.41 1 1 0 001.42 0 1 1 0 000-1.41 1 1 0 00-1.42 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBandAid);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
