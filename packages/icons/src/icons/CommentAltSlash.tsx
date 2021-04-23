import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCommentAltSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.66 6H17a1 1 0 011 1v6.34a1 1 0 102 0V7a3 3 0 00-3-3h-6.34a1 1 0 000 2zm11.05 14.29l-18-18a1 1 0 00-1.42 1.42l2 2A3 3 0 004 7v12a1 1 0 00.62.92A.84.84 0 005 20a1 1 0 00.71-.29L8.41 17h7.18l4.7 4.71a1 1 0 001.42 0 1 1 0 000-1.42zM8 15a1 1 0 00-.71.29L6 16.59V7.41L13.59 15z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
