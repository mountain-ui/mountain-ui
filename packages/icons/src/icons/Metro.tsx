import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMetro(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.71 14.29a1.002 1.002 0 00-1.09-.21.9.9 0 00-.54.54 1 1 0 101.84 0 1.147 1.147 0 00-.21-.33zm8 0a1.047 1.047 0 00-1.42 0 1.147 1.147 0 00-.21.33.99.99 0 00.21 1.09 1.147 1.147 0 00.33.21.941.941 0 00.76 0 1.16 1.16 0 00.33-.21.99.99 0 00.21-1.09 1.147 1.147 0 00-.21-.33zm2.6 4.605a4.97 4.97 0 001.784-4.817l-1.5-8A5 5 0 0014.68 2H9.319a5 5 0 00-4.913 4.078l-1.5 8a4.97 4.97 0 001.785 4.817l-1.398 1.398a1 1 0 101.414 1.414l1.87-1.87A5.006 5.006 0 007.818 20h8.362a5.006 5.006 0 001.243-.162l1.869 1.869a1 1 0 001.414-1.414zM6.37 6.447A3.002 3.002 0 019.32 4h5.362a3.002 3.002 0 012.948 2.447l.347 1.85a7.955 7.955 0 01-11.952 0zm12.117 10.469A2.99 2.99 0 0116.181 18H7.819a3 3 0 01-2.948-3.553l.711-3.792a9.954 9.954 0 0012.836 0l.71 3.792a2.99 2.99 0 01-.64 2.469z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMetro);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
