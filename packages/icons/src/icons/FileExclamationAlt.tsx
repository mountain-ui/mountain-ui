import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileExclamationAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 10h1a1 1 0 000-2H9a1 1 0 000 2zm6 2H9a1 1 0 000 2h6a1 1 0 000-2zm0 4H9a1 1 0 000 2h6a1 1 0 000-2zm4.71 4.29a1.58 1.58 0 00-.15-.12.76.76 0 00-.18-.09L19.2 20a1 1 0 00-.58.06.9.9 0 00-.54.54.84.84 0 00-.08.4 1 1 0 101.92-.38 1.15 1.15 0 00-.21-.33zM20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06zM15 8a1 1 0 01-1-1V5.41L16.59 8zm4 7a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileExclamationAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
