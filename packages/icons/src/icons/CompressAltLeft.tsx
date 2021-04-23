import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCompressAltLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.5 5.5a1 1 0 00-1 1v1.59l-5.79-5.8a1 1 0 00-1.42 1.42l5.8 5.79H6.5a1 1 0 000 2h4a1 1 0 00.38-.08 1 1 0 00.54-.54 1 1 0 00.08-.38v-4a1 1 0 00-1-1zm11.21 14.79l-5.8-5.79h1.59a1 1 0 000-2h-4a1 1 0 00-.38.08 1 1 0 00-.54.54 1 1 0 00-.08.38v4a1 1 0 002 0v-1.59l5.79 5.8a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompressAltLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
