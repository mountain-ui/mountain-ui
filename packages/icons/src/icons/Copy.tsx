import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCopy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H10a3 3 0 00-3 3v1H6a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-1h1a3 3 0 003-3V9v-.06zm-6-3.53L17.59 8H16a1 1 0 01-1-1zM15 19a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h1v7a3 3 0 003 3h5zm4-4a1 1 0 01-1 1h-8a1 1 0 01-1-1V5a1 1 0 011-1h3v3a3 3 0 003 3h3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCopy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
