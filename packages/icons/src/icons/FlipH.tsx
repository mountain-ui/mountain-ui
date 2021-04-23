import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFlipH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11H3a1 1 0 000 2h18a1 1 0 000-2zM10.93 9h1.5a1 1 0 000-2h-1.5a1 1 0 000 2zm4.5-1a1 1 0 001 1H17a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-.66-.65a1 1 0 00-1.41 0 1 1 0 00-.19 1.15 1.49 1.49 0 00-.02.21zm-3.78-3.23l.35-.36.81.81a1 1 0 001.41 0 1 1 0 000-1.41l-1.06-1.06a.91.91 0 00-.26-.19 1 1 0 00-1.61-.27l-1.06 1.06a1 1 0 001.42 1.42zM17 15H7a1 1 0 00-.92.62 1 1 0 00.21 1.09l5 5a1 1 0 001.42 0l5-5a1 1 0 00.21-1.09A1 1 0 0017 15zm-5 4.59L9.41 17h5.18zM7.05 9a1 1 0 00.71-.29L8.82 7.6A1 1 0 007.4 6.18L6.34 7.24a1 1 0 000 1.42 1 1 0 00.71.34z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFlipH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
