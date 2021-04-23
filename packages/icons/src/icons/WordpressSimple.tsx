import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWordpressSimple(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zM3.01 12a8.955 8.955 0 01.778-3.66l4.289 11.751A8.991 8.991 0 013.009 12zM12 20.99a8.987 8.987 0 01-2.54-.366l2.698-7.839 2.763 7.572a.844.844 0 00.065.123 8.971 8.971 0 01-2.986.51zm1.239-13.207c.541-.028 1.03-.085 1.03-.085a.372.372 0 00-.058-.741s-1.457.114-2.397.114c-.883 0-2.368-.114-2.368-.114a.372.372 0 00-.057.741s.459.057.943.085l1.401 3.838-1.968 5.901-3.274-9.739c.542-.028 1.03-.085 1.03-.085a.372.372 0 00-.058-.741s-1.456.114-2.396.114c-.169 0-.368-.004-.579-.01A8.988 8.988 0 0118.071 5.37c-.039-.003-.076-.008-.116-.008a1.557 1.557 0 00-1.51 1.596 4.21 4.21 0 00.883 2.109 4.736 4.736 0 01.741 2.48 10.883 10.883 0 01-.684 2.906l-.897 2.996zm3.281 11.987l2.746-7.94a8.489 8.489 0 00.684-3.22 6.91 6.91 0 00-.06-.925 8.992 8.992 0 01-3.37 12.085z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWordpressSimple);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
