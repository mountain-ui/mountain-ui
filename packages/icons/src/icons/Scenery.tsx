import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgScenery(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a2.81 2.81 0 00.49-.05l.3-.07H19.91l.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79 3.79 0 00.38-.32l.07-.09a2.69 2.69 0 00.27-.32l.09-.13a2.31 2.31 0 00.18-.35 1 1 0 00.07-.15c.05-.12.08-.25.12-.38v-.15a2.6 2.6 0 00.1-.6V5a3 3 0 00-3-3zM5 20a1 1 0 01-1-1v-4.31l3.29-3.3a1 1 0 011.42 0l8.6 8.61zm15-1a1 1 0 01-.07.36 1 1 0 01-.08.14.94.94 0 01-.09.12l-5.35-5.35.88-.88a1 1 0 011.42 0l3.29 3.3zm0-5.14L18.12 12a3.08 3.08 0 00-4.24 0l-.88.88L10.12 10a3.08 3.08 0 00-4.24 0L4 11.86V5a1 1 0 011-1h14a1 1 0 011 1zM13.5 6A1.5 1.5 0 1015 7.5 1.5 1.5 0 0013.5 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScenery);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
