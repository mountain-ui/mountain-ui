import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTelegramAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M22.265 2.428a2.048 2.048 0 00-2.078-.324L2.266 9.339a2.043 2.043 0 00.104 3.818l3.625 1.261 2.02 6.682a.998.998 0 00.119.252c.008.012.019.02.027.033a.988.988 0 00.211.215.972.972 0 00.07.05.986.986 0 00.31.136l.013.001.006.003a1.022 1.022 0 00.203.02l.018-.003a.993.993 0 00.301-.052c.023-.008.042-.02.064-.03a.993.993 0 00.205-.114 250.76 250.76 0 01.152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 001.241.427 2.054 2.054 0 002.008-1.633l3.263-16.017a2.03 2.03 0 00-.693-1.97zM9.37 14.736a.994.994 0 00-.272.506l-.31 1.504-.784-2.593 4.065-2.117zm8.302 5.304l-4.763-3.69a1.001 1.001 0 00-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 00-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTelegramAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
