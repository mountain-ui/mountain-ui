import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgJavaScript(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.478 14.883a4.061 4.061 0 01-2.187-.398 1.439 1.439 0 01-.536-1.01.222.222 0 00-.226-.22 46.826 46.826 0 00-.95 0 .211.211 0 00-.231.186 2.339 2.339 0 00.753 1.844 3.991 3.991 0 002.228.839 8.062 8.062 0 002.533-.108 3.126 3.126 0 001.678-.904 2.338 2.338 0 00.396-2.231 1.869 1.869 0 00-1.23-1.095c-1.28-.45-2.664-.415-3.97-.757-.227-.07-.504-.148-.605-.388a.855.855 0 01.284-.955 2.558 2.558 0 011.35-.336 4.07 4.07 0 011.883.27 1.436 1.436 0 01.687.992.243.243 0 00.228.236c.314.006.628.001.943.002a.228.228 0 00.247-.168 2.434 2.434 0 00-1.187-2.106 5.88 5.88 0 00-3.218-.493 3.505 3.505 0 00-2.176.875 2.175 2.175 0 00-.434 2.262 1.93 1.93 0 001.218 1.062c1.277.461 2.676.313 3.964.721.252.085.544.216.621.495a.99.99 0 01-.27.946 2.97 2.97 0 01-1.793.439zm5.819-8.445q-3.738-2.114-7.479-4.225a1.677 1.677 0 00-1.637 0L3.73 6.421a1.542 1.542 0 00-.805 1.342v8.475a1.553 1.553 0 00.836 1.355c.713.388 1.406.816 2.133 1.179a3.064 3.064 0 002.738.075 2.127 2.127 0 00.995-1.921c.005-2.797 0-5.594.002-8.39a.22.22 0 00-.207-.255 41.555 41.555 0 00-.953 0 .21.21 0 00-.228.213c-.004 2.779.001 5.558-.002 8.338a.94.94 0 01-.61.883 1.532 1.532 0 01-1.24-.166l-1.982-1.12a.237.237 0 01-.135-.235V7.807a.259.259 0 01.157-.26q3.713-2.092 7.425-4.187a.258.258 0 01.292 0l7.426 4.186a.262.262 0 01.156.26v8.388a.242.242 0 01-.134.238q-3.656 2.068-7.317 4.13c-.116.064-.254.169-.39.09-.64-.362-1.27-.738-1.908-1.103a.206.206 0 00-.23-.014 5.218 5.218 0 01-.882.412c-.138.056-.308.072-.403.2a1.316 1.316 0 00.432.31l2.236 1.293a1.63 1.63 0 001.655.046q3.726-2.1 7.452-4.204a1.556 1.556 0 00.836-1.354V7.763a1.54 1.54 0 00-.778-1.325z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgJavaScript);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
