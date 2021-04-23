import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBoltSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.67 4.23A1 1 0 009.6 4h5.1l-1.27 4.74a1 1 0 00.17.87 1 1 0 00.79.39H18l-1.13 1.24a1 1 0 00.07 1.41 1 1 0 00.67.26 1 1 0 00.74-.33L21 9.67A1 1 0 0020.23 8h-4.54L17 3.26a1 1 0 00-.18-.87A1 1 0 0016 2H9a1 1 0 00-1 .74V3a1 1 0 00.67 1.23zm13 16.06l-18-18a1 1 0 00-1.38 1.42L6.61 8l-1.26 4.74a1 1 0 00.18.87 1 1 0 00.79.39h3.84l-1.81 6.74a1 1 0 00.49 1.14 1 1 0 00.48.12 1 1 0 00.74-.33l4.85-5.34 5.38 5.38a1 1 0 001.42 0 1 1 0 000-1.42zM7.62 12l.63-2.34L10.59 12zm3.73 5.28l1-3.56 1.2 1.19z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBoltSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
