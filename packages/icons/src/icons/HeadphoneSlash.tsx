import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgHeadphoneSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.07 5.936a9.945 9.945 0 00-9.39-2.671 1 1 0 00.44 1.95A8.02 8.02 0 0120 13h-.34a1 1 0 000 2H20v.34a1 1 0 102 0V13a9.888 9.888 0 00-2.93-7.064zM3.706 2.293a1 1 0 00-1.414 1.414l2.435 2.435A9.962 9.962 0 002 13v7a1 1 0 001 1h3a3.003 3.003 0 003-3v-2a3.003 3.003 0 00-3-3H4a7.963 7.963 0 012.145-5.441L15 16.414V18a3.003 3.003 0 003 3h1.586l.707.707a1 1 0 001.414-1.414zM6 15a1.001 1.001 0 011 1v2a1.001 1.001 0 01-1 1H4v-4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeadphoneSlash);
export default ForwardRef;
