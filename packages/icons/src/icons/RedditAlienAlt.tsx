import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgRedditAlienAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.41 16.867a3.375 3.375 0 01-2.368.633 3.368 3.368 0 01-2.365-.632 1 1 0 00-1.416 1.414 5.11 5.11 0 003.781 1.218 5.12 5.12 0 003.782-1.217 1 1 0 10-1.414-1.416zM9.2 15.002a1 1 0 10-1-1 1 1 0 001 1zm6-2a1 1 0 101 1 1.001 1.001 0 00-1-1zM23 11.78a3.772 3.772 0 00-6.794-2.264 16.505 16.505 0 00-3.05-.479l.856-5.705 2.087.71a2.997 2.997 0 005.994-.064v-.023a3.029 3.029 0 00-3-2.955 2.977 2.977 0 00-2.332 1.155l-3.239-1.101a.999.999 0 00-1.311.798l-1.077 7.175a16.664 16.664 0 00-3.34.489 3.768 3.768 0 00-6.225 4.234A4.862 4.862 0 001 16c0 3.925 4.832 7 11 7s11-3.075 11-7a4.862 4.862 0 00-.569-2.249 3.783 3.783 0 00.569-1.97zM19.093 3a1 1 0 11-1 1 1.017 1.017 0 011-1zM4.78 10a1.76 1.76 0 01.882.25 9.979 9.979 0 00-2.648 1.673C3.01 11.876 3 11.828 3 11.78A1.783 1.783 0 014.78 10zM12 21c-4.879 0-9-2.29-9-5s4.121-5 9-5 9 2.29 9 5-4.121 5-9 5zm8.986-9.077a9.978 9.978 0 00-2.648-1.673 1.76 1.76 0 01.882-.25A1.783 1.783 0 0121 11.78c0 .048-.01.096-.014.143z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRedditAlienAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
