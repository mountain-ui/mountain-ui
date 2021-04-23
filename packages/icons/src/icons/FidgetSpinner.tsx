import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFidgetSpinner(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 7a1 1 0 101 1 1 1 0 00-1-1zm-5.696 9.134a1 1 0 101.366.366 1 1 0 00-1.366-.366zm11.392 0a1 1 0 10.366 1.366 1 1 0 00-.366-1.366zm2.914-2.791a4.918 4.918 0 00-4.526-1.197l-.419-.763a4.989 4.989 0 00-2.503-8.251 5.035 5.035 0 00-4.279.958A4.978 4.978 0 007 8a4.929 4.929 0 001.352 3.392l-.419.75a4.989 4.989 0 00-5.926 6.286 5.03 5.03 0 002.97 3.226 4.97 4.97 0 006.588-3.19l.867.014a4.981 4.981 0 004.76 3.524 5.017 5.017 0 004.8-3.573 4.95 4.95 0 00-1.382-5.086zm-.528 4.495a3.006 3.006 0 01-4.386 1.76 2.965 2.965 0 01-1.352-1.705 1.994 1.994 0 00-1.91-1.43h-.869a1.995 1.995 0 00-1.91 1.43 2.98 2.98 0 01-3.948 1.899 2.993 2.993 0 011.767-5.704 1.967 1.967 0 002.173-.942l.436-.754a1.995 1.995 0 00-.281-2.369 2.98 2.98 0 01.329-4.37 2.993 2.993 0 014.069 4.369 2 2 0 00-.283 2.37l.435.753a1.974 1.974 0 002.174.943 2.988 2.988 0 013.556 3.75z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFidgetSpinner);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
