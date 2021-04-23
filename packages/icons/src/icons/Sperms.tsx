import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSperms(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.06 20.1a2 2 0 01-.65-.48 2.47 2.47 0 01-.67-1.14 4.19 4.19 0 00-1.31-2.06 3.57 3.57 0 00-1-3.28 3.28 3.28 0 00-4.59-.35 3.29 3.29 0 00.35 4.6 3.87 3.87 0 002.21 1.12h.36a2.85 2.85 0 001.53-.44 2.05 2.05 0 01.51.93A4.46 4.46 0 009 21a4.27 4.27 0 001.2.88 1 1 0 00.44.1 1 1 0 00.44-1.9zm-4.74-3.77a.86.86 0 01-.7.19A1.8 1.8 0 014.56 16c-.57-.56-.73-1.39-.36-1.77a.82.82 0 01.56-.2 1.8 1.8 0 011.24.53 1.8 1.8 0 01.55 1.06.86.86 0 01-.23.71zm15-6.12a2.17 2.17 0 01-.91-.59 2.47 2.47 0 01-.67-1.14 4.19 4.19 0 00-1.31-2.06 3.57 3.57 0 00-1.05-3.28 3.28 3.28 0 00-4.59-.35 3.29 3.29 0 00.35 4.6 3.87 3.87 0 002.26 1.12h.36a2.85 2.85 0 001.53-.44 2.05 2.05 0 01.51.93 4.54 4.54 0 001.2 2 4.36 4.36 0 001.7 1.08 1.25 1.25 0 00.32.05 1 1 0 00.95-.68 1 1 0 00-.65-1.24zm-5-3.88a.86.86 0 01-.7.19A1.8 1.8 0 0114.56 6c-.57-.56-.73-1.39-.36-1.77a.82.82 0 01.56-.2 1.8 1.8 0 011.24.53 1.8 1.8 0 01.55 1.06.86.86 0 01-.23.71zm5.39 14.12a4.45 4.45 0 00-3.23-3.23 3.18 3.18 0 01-1.39-.82 2.93 2.93 0 01-.8-1.38A4.65 4.65 0 0013 11.77a2.92 2.92 0 01-1.38-.8 3 3 0 01-.81-1.39 4.68 4.68 0 00-1-1.86 3.94 3.94 0 00.19-1.5 4.75 4.75 0 00-1.4-2.8A4.78 4.78 0 005.78 2 3.43 3.43 0 003 3a3.43 3.43 0 00-1 2.78 4.75 4.75 0 001.4 2.8A4.78 4.78 0 006.22 10h.43a3.39 3.39 0 002-.6 2.64 2.64 0 01.31.71 5.12 5.12 0 003.6 3.59 2.61 2.61 0 011.83 1.84 5.11 5.11 0 003.6 3.6 2.57 2.57 0 011.8 1.86 2.8 2.8 0 00.16.46 1 1 0 00.88.54 1.21 1.21 0 00.44-.1 1 1 0 00.48-1.33s-.03-.1-.04-.12zM7.64 7.64c-.64.63-1.92.41-2.81-.47A2.78 2.78 0 014 5.56a1.47 1.47 0 01.35-1.2 1.39 1.39 0 011-.36 2.71 2.71 0 011.83.83A2.78 2.78 0 018 6.44a1.47 1.47 0 01-.36 1.2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSperms);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
