import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltImage(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V5a3 3 0 00-3-3zM5.77 16H5a1 1 0 01-1-1v-.42l3.3-3.29a1 1 0 011.41 0l.87.87zM20 18.59l-2.29-2.3A1 1 0 0017 16H8.59l6.71-6.71a1 1 0 011.4 0l3.3 3.29zm0-8.83l-1.88-1.87a3 3 0 00-4.24 0L11 10.76l-.88-.87a3.06 3.06 0 00-4.24 0L4 11.76V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltImage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
