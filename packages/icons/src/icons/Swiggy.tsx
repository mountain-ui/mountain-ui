import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSwiggy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.878 5.928a.297.297 0 01.314.335l.003.276c.001.593-.002 1.185.002 1.777.004.434.08.517.5.57a14.832 14.832 0 003.148-.046 4.948 4.948 0 001.573-.374.507.507 0 00.344-.603 6.831 6.831 0 00-5.343-5.71 6.608 6.608 0 00-3.648.242 6.718 6.718 0 00-2.694 1.752A6.272 6.272 0 005.23 8.432a11.188 11.188 0 001.526 5.517 1.342 1.342 0 001.33.748c.653-.016 1.307-.004 1.96-.004v-.003h2.084c.25 0 .447.06.445.372-.005.726 0 1.45-.003 2.176-.002.22-.064.432-.326.434-.264.002-.327-.209-.33-.43-.005-.347 0-.694 0-1.041 0-.451-.073-.557-.523-.64a7.702 7.702 0 00-2.348-.02 2.596 2.596 0 00-.8.196c-.212.1-.296.245-.193.467.107.231.206.467.333.688a43.875 43.875 0 003.426 4.956c.154.199.273.203.431.01.349-.426.715-.839 1.06-1.268a34.226 34.226 0 003.577-5.26 14.171 14.171 0 001.494-3.871 1.203 1.203 0 00-1.012-1.635 6.943 6.943 0 00-1.67-.162c-.909-.006-1.818-.003-2.727-.002-.245 0-.427-.07-.427-.358 0-1.01-.002-2.022.002-3.033 0-.216.104-.349.339-.34z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSwiggy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
