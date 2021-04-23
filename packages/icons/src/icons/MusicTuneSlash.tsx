import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMusicTuneSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 7.33a1 1 0 001-1v-.55l6-1.5v2.94L14.7 8.3a1 1 0 00.24 2h.24L20.24 9h.07l.19-.09.15-.1a.93.93 0 00.13-.15.78.78 0 00.1-.15.55.55 0 00.06-.18.65.65 0 000-.19A.24.24 0 0021 8V3a1 1 0 00-1.24-1l-8 2A1 1 0 0011 5v1.33a1 1 0 001 1zm9.71 13l-9-9-9-9a1 1 0 00-1.42 1.38l8.71 8.7v2.94A3.45 3.45 0 009.5 15a3.5 3.5 0 103.5 3.5v-4.09l7.29 7.3a1 1 0 001.42 0 1 1 0 000-1.42zM9.5 20a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019.5 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMusicTuneSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
