import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFileExclamation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.92 16.62a.76.76 0 00-.09-.18 1.58 1.58 0 00-.12-.15 1 1 0 00-1.09-.21 1 1 0 00-.33.21 1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.5 1.5 0 000 .2.84.84 0 00.08.38 1.15 1.15 0 00.21.33A1 1 0 0012 18a.84.84 0 00.38-.08.9.9 0 00.54-.54A.84.84 0 0013 17a1.5 1.5 0 000-.2.64.64 0 00-.08-.18zM20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3zm-6-8a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileExclamation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
