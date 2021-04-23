import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderExclamation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.92 16.12a.76.76 0 00-.09-.18 1.58 1.58 0 00-.12-.15l-.15-.12-.18-.09a.6.6 0 00-.19-.06 1 1 0 00-.9.27l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.08.38 1.15 1.15 0 00.21.33 1 1 0 001.09.22 1.46 1.46 0 00.33-.22 1.46 1.46 0 00.22-.33 1 1 0 00.05-.38 1.36 1.36 0 000-.2.64.64 0 00-.08-.18zM12 10.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm7-5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderExclamation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
