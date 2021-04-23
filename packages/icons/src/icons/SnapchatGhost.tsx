import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSnapchatGhost(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.798 16.987c-2.867-.472-4.151-3.401-4.204-3.526l-.006-.011a1.07 1.07 0 01-.102-.898c.192-.454.83-.656 1.251-.79.106-.033.205-.065.283-.096.763-.3.918-.613.914-.822a.662.662 0 00-.5-.543l-.007-.002a.946.946 0 00-.356-.069.755.755 0 00-.313.063 2.54 2.54 0 01-.955.266.821.821 0 01-.53-.178l.032-.53.004-.065a10.102 10.102 0 00-.24-4.035 5.248 5.248 0 00-4.874-3.14l-.402.005a5.24 5.24 0 00-4.864 3.137 10.09 10.09 0 00-.242 4.031q.02.299.036.598a.848.848 0 01-.584.178 2.453 2.453 0 01-1.014-.268.575.575 0 00-.245-.049.834.834 0 00-.81.533c-.082.43.532.743.906.89.08.032.178.063.283.096.422.134 1.06.336 1.252.79a1.072 1.072 0 01-.102.898l-.006.011a7.028 7.028 0 01-1.069 1.663A5.215 5.215 0 012.2 16.987a.24.24 0 00-.2.25.38.38 0 00.03.13c.177.411 1.059.75 2.553.981.14.022.198.25.28.622.032.15.066.305.113.465a.293.293 0 00.32.228 2.485 2.485 0 00.424-.06 5.53 5.53 0 011.12-.127 4.954 4.954 0 01.809.068 3.877 3.877 0 011.535.784 4.443 4.443 0 002.69 1.06c.033 0 .067-.001.1-.004.04.002.095.004.151.004a4.448 4.448 0 002.692-1.06 3.873 3.873 0 011.533-.784 4.973 4.973 0 01.808-.068 5.593 5.593 0 011.12.119 2.391 2.391 0 00.425.053h.024a.279.279 0 00.295-.22 6.52 6.52 0 00.114-.462c.081-.371.14-.598.28-.62 1.494-.23 2.377-.57 2.551-.978a.385.385 0 00.032-.13.24.24 0 00-.2-.25z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSnapchatGhost);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
