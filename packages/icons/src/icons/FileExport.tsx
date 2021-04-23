import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileExport(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.92 15.62a1.15 1.15 0 00-.21-.33l-3-3a1 1 0 00-1.42 1.42l1.3 1.29H12a1 1 0 000 2h5.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a.93.93 0 00.21-.33 1 1 0 000-.76zM14 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-6-6a1.07 1.07 0 00-.28-.19h-.09l-.28-.1H6a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2zM13 5.41L15.59 8H14a1 1 0 01-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileExport);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
