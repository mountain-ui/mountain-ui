import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFire(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.468 8.395l-.002.001-.003.002zm9.954-.187a1.237 1.237 0 00-.23-.175 1 1 0 00-1.4.411 5.782 5.782 0 01-1.398 1.778 8.664 8.664 0 00.134-1.51 8.714 8.714 0 00-4.4-7.582 1 1 0 00-1.492.806 7.017 7.017 0 01-2.471 4.942l-.23.187a8.513 8.513 0 00-1.988 1.863 8.983 8.983 0 003.656 13.908 1 1 0 001.377-.926 1.05 1.05 0 00-.05-.312 6.977 6.977 0 01-.19-2.581 9.004 9.004 0 004.313 4.016.997.997 0 00.715.038 8.995 8.995 0 003.654-14.863zm-3.905 12.831a6.964 6.964 0 01-3.577-4.402 8.908 8.908 0 01-.18-.964 1 1 0 00-.799-.845.982.982 0 00-.191-.018 1 1 0 00-.867.5 8.959 8.959 0 00-1.205 4.718 6.985 6.985 0 01-1.176-9.868 6.555 6.555 0 011.562-1.458.745.745 0 00.075-.055s.296-.245.306-.25a8.968 8.968 0 002.9-4.633 6.736 6.736 0 011.385 8.088 1 1 0 001.184 1.418 7.856 7.856 0 003.862-2.688 7 7 0 01-3.279 10.457z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFire);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
