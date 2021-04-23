import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCommentImage(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 00-9.56 12.91.29.29 0 000 .1 9.83 9.83 0 001.79 3.32l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 009.46-6.78v-.08A9.89 9.89 0 0022 12 10 10 0 0012 2zm0 18H5.41l.3-.29 8.41-8.42a1 1 0 011.4 0l3.62 3.6.23.22A8 8 0 0112 20zm-7.46-5.13l1.58-1.58a1 1 0 011.41 0l.87.87-2.72 2.74a7.67 7.67 0 01-1.14-2.03zm15.41-2l-3-3a3 3 0 00-4.24 0l-2.89 2.89-.88-.87a3 3 0 00-4.23 0l-.71.67A5.25 5.25 0 014 12a8 8 0 0116 0 8.27 8.27 0 010 .86z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentImage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
