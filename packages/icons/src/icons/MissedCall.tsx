import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMissedCall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6 7.49a1 1 0 001-1V5.9l2.88 2.88a3 3 0 004.24 0l4.59-4.59a1 1 0 000-1.41 1 1 0 00-1.42 0l-4.58 4.58a1 1 0 01-1.42 0L8.41 4.49H9a1 1 0 000-2H6a1 1 0 00-.92.61 1.09 1.09 0 00-.08.39v3a1 1 0 001 1zm15.94 7.36a16.27 16.27 0 00-19.88 0 2.69 2.69 0 00-1 2 2.66 2.66 0 00.78 2.07l1.76 1.8a2.68 2.68 0 003.46.28l.47-.32a8.13 8.13 0 011-.55 1.85 1.85 0 001-2.3l-.09-.24a10.49 10.49 0 015.22 0l-.09.24a1.85 1.85 0 001 2.3 8.13 8.13 0 011 .55l.47.32a2.58 2.58 0 001.54.5 2.72 2.72 0 001.92-.79l1.81-1.82a2.66 2.66 0 00.69-2.06 2.69 2.69 0 00-1.06-1.98zm-1.14 2.64L19 19.3a.68.68 0 01-.86.1c-.19-.14-.38-.27-.59-.4a11.65 11.65 0 00-1.09-.61l.4-1.09a1 1 0 00-.6-1.28 12.42 12.42 0 00-8.5 0 1 1 0 00-.6 1.28l.4 1.1a9.8 9.8 0 00-1.1.6l-.58.4a.66.66 0 01-.88-.1l-1.8-1.81A.67.67 0 013 17a.76.76 0 01.28-.53 14.29 14.29 0 0117.44 0A.76.76 0 0121 17a.67.67 0 01-.2.49z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMissedCall);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
