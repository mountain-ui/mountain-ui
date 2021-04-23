import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBooks(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.47 18.82l-1-3.86-3.15-11.59a1 1 0 00-1.22-.71l-3.87 1a1 1 0 00-.73-.33h-10a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1v-8l2.2 8.22a1 1 0 001 .74 1.15 1.15 0 00.26 0L21.79 20a1 1 0 00.61-.47 1.05 1.05 0 00.07-.71zm-16 .55h-3v-2h3zm0-4h-3v-6h3zm0-8h-3v-2h3zm5 12h-3v-2h3zm0-4h-3v-6h3zm0-8h-3v-2h3zm2.25-1.74l2.9-.78.52 1.93-2.9.78zm2.59 9.66l-1.55-5.8 2.9-.78 1.55 5.8zm1 3.86l-.52-1.93 2.9-.78.52 1.93z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBooks);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
