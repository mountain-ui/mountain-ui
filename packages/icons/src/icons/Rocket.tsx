import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgRocket(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.601 2.062a1 1 0 00-.713-.713A11.252 11.252 0 0010.47 4.972L9.354 6.296 6.75 5.668a2.777 2.777 0 00-3.387 1.357l-2.2 3.9a1 1 0 00.661 1.469l3.073.659a13.42 13.42 0 00-.555 2.434 1 1 0 00.284.836l3.1 3.1a1 1 0 00.708.293c.028 0 .057-.001.086-.004a12.169 12.169 0 002.492-.49l.644 3.004a1 1 0 001.469.661l3.905-2.202a3.035 3.035 0 001.375-3.304l-.668-2.76 1.237-1.137A11.204 11.204 0 0022.6 2.062zM3.572 10.723l1.556-2.76a.826.826 0 011.07-.375l1.718.416-.65.772a13.095 13.095 0 00-1.59 2.398zm12.47 8.222l-2.715 1.532-.43-2.005a11.34 11.34 0 002.414-1.62l.743-.683.404 1.664a1.041 1.041 0 01-.416 1.112zm1.615-6.965l-3.685 3.386a9.773 9.773 0 01-5.17 2.304l-2.405-2.404a10.932 10.932 0 012.401-5.206l1.679-1.993a.964.964 0 00.078-.092L11.99 6.27a9.278 9.278 0 018.81-3.12 9.218 9.218 0 01-3.143 8.829zm-.923-6.164a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRocket);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
