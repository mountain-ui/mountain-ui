import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgHindiToChinese(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.022 2h-2a1 1 0 000 2v2H7.838a2.965 2.965 0 00.184-1 3 3 0 00-5.598-1.5 1 1 0 101.732 1 1.002 1.002 0 01.866-.5 1 1 0 010 2 1 1 0 000 2 1 1 0 010 2 1.002 1.002 0 01-.866-.5 1 1 0 10-1.732 1A3 3 0 008.022 9a2.965 2.965 0 00-.184-1h1.184v3a1 1 0 002 0V4a1 1 0 000-2zm3 5h1a1.001 1.001 0 011 1v1a1 1 0 002 0V8a3.003 3.003 0 00-3-3h-1a1 1 0 000 2zm-4 9h-1a1.001 1.001 0 01-1-1v-1a1 1 0 00-2 0v1a3.003 3.003 0 003 3h1a1 1 0 000-2zm11-1a1 1 0 000-2h-3v-.5a1 1 0 00-2 0v.5h-3a1 1 0 000 2h5.184a6.728 6.728 0 01-1.225 2.527 6.668 6.668 0 01-.63-.983 1 1 0 10-1.779.912 8.678 8.678 0 00.96 1.468 6.618 6.618 0 01-2.426 1.099 1 1 0 00.427 1.954 8.635 8.635 0 003.445-1.622 8.724 8.724 0 003.469 1.622 1 1 0 10.43-1.954 6.725 6.725 0 01-2.446-1.09A8.736 8.736 0 0020.244 15z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHindiToChinese);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
