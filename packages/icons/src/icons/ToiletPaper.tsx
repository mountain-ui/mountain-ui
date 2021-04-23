import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgToiletPaper(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.26 20.357a7.523 7.523 0 01-1.76-4.905v-7.46c0-3.308-2.243-6-5-6h-9c-2.757 0-5 2.692-5 6s2.243 6 5 6h3v1.46a9.527 9.527 0 002.24 6.206 1.001 1.001 0 00.76.35h9a1 1 0 00.76-1.651zM6.5 11.993c-1.654 0-3-1.795-3-4s1.346-4 3-4 3 1.794 3 4-1.346 4-3 4zm6.479 8.014a7.58 7.58 0 01-1.479-4.555v-7c0-.028-.014-.052-.016-.08.007-.126.016-.251.016-.38a6.68 6.68 0 00-1.284-4H15.5c1.654 0 3 1.795 3 4v7.46a9.71 9.71 0 001.118 4.555zM6.5 6.743a1.146 1.146 0 00-1 1.25 1.146 1.146 0 001 1.25 1.146 1.146 0 001-1.25 1.146 1.146 0 00-1-1.25z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgToiletPaper);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
