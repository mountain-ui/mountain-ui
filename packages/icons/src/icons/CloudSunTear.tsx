import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudSunTear(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.05 14.33a1 1 0 00-1.11 0c-.1.08-2.44 1.67-2.44 4.17a3 3 0 006 0c0-2.5-2.34-4.1-2.45-4.17zm-.55 5.17a1 1 0 01-1-1 3 3 0 011-2 3 3 0 011 2 1 1 0 01-1 1zM21 7.5h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 4.3v-.8a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a5.85 5.85 0 00-1.58-.22 6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 014 15a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1 1 0 001.1 1.68 4.3 4.3 0 001.65-5.18l.13.13a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.56-.56a4.25 4.25 0 00.47-1.27h.8a1 1 0 000-2zm-3.34 2.65a2.45 2.45 0 01-.6.41A4.17 4.17 0 0016 10a6.12 6.12 0 00-2.09-2.49 2.25 2.25 0 01.46-.69 2.42 2.42 0 013.29 0 2.37 2.37 0 010 3.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSunTear);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
