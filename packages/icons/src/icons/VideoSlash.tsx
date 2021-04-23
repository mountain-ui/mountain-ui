import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgVideoSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.71 6.29l-4-4a1 1 0 00-1.42 1.42L4.62 6A3 3 0 002 9v6a3 3 0 003 3h9a3 3 0 001.9-.69l4.39 4.4a1 1 0 001.42 0 1 1 0 000-1.42zM14 16H5a1 1 0 01-1-1V9a1 1 0 011-1h1.59l7.87 7.88A1 1 0 0114 16zm7.53-8.85a1 1 0 00-1 0L17 8.89A3 3 0 0014 6h-1.34a1 1 0 000 2H14a1 1 0 011 1v1.5a1.62 1.62 0 000 .19.65.65 0 00.05.2s.05.06.07.1a1 1 0 00.15.21s.1.06.15.1l.17.11a.85.85 0 00.23 0 .7.7 0 00.14 0 1.62 1.62 0 00.19 0 .65.65 0 00.2-.05L20 9.62v5.72a1 1 0 102 0V8a1 1 0 00-.47-.85z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVideoSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
