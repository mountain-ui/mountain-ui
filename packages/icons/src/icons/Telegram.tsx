import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTelegram(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M11.994 2a10 10 0 1010 10 10 10 0 00-10-10zm3.18 15.152a.705.705 0 01-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 01-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTelegram);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
