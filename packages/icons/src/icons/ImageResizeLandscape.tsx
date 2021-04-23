import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageResizeLandscape(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13 11H2a1 1 0 00-1 1v9a1 1 0 001 1h11a1 1 0 001-1v-9a1 1 0 00-1-1zm-5.56 9l1.93-1.93a.3.3 0 01.5 0L11.79 20zM12 17.38l-.72-.71a2.41 2.41 0 00-3.33 0L4.61 20H3v-7h9zM2 4.11a1 1 0 00.86-.49A1.05 1.05 0 003.05 3 1 1 0 002 2a1 1 0 00-1 1v.1a1 1 0 001 1.01zM9.91 4h.19a1 1 0 000-2h-.19a1 1 0 000 2zM2 8.78a1 1 0 001-1v-.22a1 1 0 10-2 0v.22a1 1 0 001 1zM14.09 2h-.19a1 1 0 000 2h.19a1 1 0 000-2zM5.91 4h.19a1 1 0 000-2h-.19a1 1 0 000 2zM22 6.4a1 1 0 00-1 1v.21a1 1 0 002 0V7.4a1 1 0 00-1-1zM17.12 20h-.24a1 1 0 100 2h.24a1 1 0 000-2zM21.9 2a1 1 0 00-.9 1 1 1 0 00.1.42 1 1 0 001.9-.31V3a1.09 1.09 0 00-1.1-1zm.1 8.9a1 1 0 00-1 1v.22a1 1 0 002 0v-.22a1 1 0 00-1-1zM18.09 2h-.19a1 1 0 000 2h.19a1 1 0 000-2zM22 20a.93.93 0 00-.44.11A1 1 0 0021 21a1 1 0 001 1 1.09 1.09 0 001-1.1 1 1 0 00-1-.9zm0-4.56a1 1 0 00-1 1v.22a1 1 0 102 0v-.26a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageResizeLandscape);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
