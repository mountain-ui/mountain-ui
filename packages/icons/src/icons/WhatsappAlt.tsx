import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWhatsappAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 6.55a12.61 12.61 0 00-.1-1.29 4.29 4.29 0 00-.37-1.08 3.66 3.66 0 00-.71-1 3.91 3.91 0 00-1-.71 4.28 4.28 0 00-1.08-.36A10.21 10.21 0 0017.46 2H6.55a12.61 12.61 0 00-1.29.1 4.29 4.29 0 00-1.08.37 3.66 3.66 0 00-1 .71 3.91 3.91 0 00-.71 1 4.28 4.28 0 00-.36 1.08A10.21 10.21 0 002 6.54V17.45a12.61 12.61 0 00.1 1.29 4.29 4.29 0 00.37 1.08 3.66 3.66 0 00.71 1 3.91 3.91 0 001 .71 4.28 4.28 0 001.08.36 10.21 10.21 0 001.28.11h10.91a12.61 12.61 0 001.29-.1 4.29 4.29 0 001.08-.37 3.66 3.66 0 001-.71 3.91 3.91 0 00.71-1 4.28 4.28 0 00.36-1.08 10.21 10.21 0 00.11-1.28V7.08v-.53zM12.23 19a7.12 7.12 0 01-3.43-.9l-3.8 1 1-3.72a7.11 7.11 0 01-1-3.58 7.18 7.18 0 117.23 7.2zm0-13.13A6 6 0 007.18 15l.14.23-.6 2.19L9 16.8l.22.13a6 6 0 003 .83 6 6 0 006-6 6 6 0 00-6-6zm3.5 8.52a1.82 1.82 0 01-1.21.85 2.33 2.33 0 01-1.12-.07 8.9 8.9 0 01-1-.38 8 8 0 01-3.06-2.7 3.48 3.48 0 01-.73-1.85 2 2 0 01.63-1.5.65.65 0 01.48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 010 .31 1.14 1.14 0 01-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 001 1.24 5 5 0 001.44.89c.18.09.29.08.39 0s.45-.52.57-.7.24-.15.4-.09 1.05.49 1.23.58.29.13.34.21a1.56 1.56 0 01-.07.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWhatsappAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
