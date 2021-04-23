import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWordpress(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.667 12a8.334 8.334 0 004.697 7.5L4.388 8.607A8.3 8.3 0 003.667 12zm8.48.729l-2.501 7.265a8.337 8.337 0 005.121-.133.746.746 0 01-.06-.115l-2.56-7.017zm5.479-1.15a4.389 4.389 0 00-.687-2.298 3.903 3.903 0 01-.819-1.954 1.443 1.443 0 011.4-1.48c.037 0 .072.005.107.008a8.331 8.331 0 00-12.59 1.568c.196.006.38.01.537.01.871 0 2.22-.106 2.22-.106a.345.345 0 01.054.687s-.452.052-.954.079l3.035 9.026 1.824-5.47-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 01.053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 01.053.687s-.452.052-.953.079l3.011 8.958.86-2.725c.336-.88.54-1.806.606-2.746zm1.743-2.72a7.866 7.866 0 01-.634 2.985l-2.545 7.359a8.334 8.334 0 003.123-11.2c.038.283.056.57.056.856zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.659 18.662a9.388 9.388 0 01-8.914-.867 9.432 9.432 0 01-3.407-4.136 9.386 9.386 0 01.867-8.914 9.427 9.427 0 014.136-3.406 9.388 9.388 0 018.914.866 9.432 9.432 0 013.407 4.136 9.386 9.386 0 01-.867 8.914 9.427 9.427 0 01-4.136 3.407z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWordpress);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
