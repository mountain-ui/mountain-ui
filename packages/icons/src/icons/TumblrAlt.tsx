import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTumblrAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.434 20.508l-.962-2.853a1 1 0 00-1.38-.583 3.763 3.763 0 01-1.208.249.937.937 0 01-.66-.165 1.2 1.2 0 01-.239-.808V12h3.017a1 1 0 001-1V7.095a1 1 0 00-1-1H13V2a1 1 0 00-1-1H9.07a1.148 1.148 0 00-1.137 1.04 5.093 5.093 0 01-3.28 4.558 1 1 0 00-.662.94v3.585a1 1 0 001 1h1.025v4.535a6.411 6.411 0 001.886 4.478A6.905 6.905 0 0012.877 23h.163c1.546-.026 3.618-.648 4.273-1.608a.998.998 0 00.12-.883zm-4.427.49a4.87 4.87 0 01-3.702-1.288 4.37 4.37 0 01-1.29-3.052v-5.535a1 1 0 00-1-1H5.992V8.206A6.954 6.954 0 009.81 3H11v4.095a1 1 0 001 1h3.002V10h-3.017a1 1 0 00-1 1v5.365a3.077 3.077 0 00.857 2.235 2.767 2.767 0 002.096.72 5.908 5.908 0 00.947-.113l.425 1.26a5.909 5.909 0 01-2.303.531z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTumblrAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
