import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMasterCard(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.265 5.274a6.681 6.681 0 00-3.273.855 6.728 6.728 0 100 11.745 6.726 6.726 0 103.273-12.6zm-5.028 11.183a4.667 4.667 0 01-1.518.273 4.728 4.728 0 010-9.456 4.667 4.667 0 011.518.273 6.687 6.687 0 000 8.91zm1.755-1.057a4.695 4.695 0 010-6.796 4.695 4.695 0 010 6.796zm3.273 1.33a4.667 4.667 0 01-1.519-.273 6.687 6.687 0 000-8.91 4.667 4.667 0 011.519-.273 4.728 4.728 0 010 9.456z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMasterCard);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
