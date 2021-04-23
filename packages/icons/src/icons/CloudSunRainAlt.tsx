import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCloudSunRainAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 19a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0-5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM21 7h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 3.8V3a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0010.5 6a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 014 14.5 1.5 1.5 0 015.5 13a1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1 1 0 001.1 1.68 4.34 4.34 0 001.9-3.62 4.19 4.19 0 00-.3-1.55l.13.12a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.56-.56A4.25 4.25 0 0020.2 9h.8a1 1 0 000-2zm-3.34 2.65a2.09 2.09 0 01-.6.42A4.17 4.17 0 0016 9.54a6.12 6.12 0 00-2.09-2.49 2.42 2.42 0 01.46-.7 2.43 2.43 0 013.3 0 2.37 2.37 0 010 3.3zM12.5 18a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0-5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSunRainAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
