import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDialpadAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 9.25A2.75 2.75 0 107.75 12 2.75 2.75 0 005 9.25zm0 4A1.25 1.25 0 116.25 12 1.25 1.25 0 015 13.25zm7-4A2.75 2.75 0 1014.75 12 2.75 2.75 0 0012 9.25zm0 4A1.25 1.25 0 1113.25 12 1.25 1.25 0 0112 13.25zm7-5.5A2.75 2.75 0 1016.25 5 2.75 2.75 0 0019 7.75zm0-4A1.25 1.25 0 1117.75 5 1.25 1.25 0 0119 3.75zm0 5.5A2.75 2.75 0 1021.75 12 2.75 2.75 0 0019 9.25zm0 4A1.25 1.25 0 1120.25 12 1.25 1.25 0 0119 13.25zm-14-11A2.75 2.75 0 107.75 5 2.75 2.75 0 005 2.25zm0 4A1.25 1.25 0 116.25 5 1.25 1.25 0 015 6.25zm7 10A2.75 2.75 0 1014.75 19 2.75 2.75 0 0012 16.25zm0 4A1.25 1.25 0 1113.25 19 1.25 1.25 0 0112 20.25zm0-18A2.75 2.75 0 1014.75 5 2.75 2.75 0 0012 2.25zm0 4A1.25 1.25 0 1113.25 5 1.25 1.25 0 0112 6.25z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDialpadAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
