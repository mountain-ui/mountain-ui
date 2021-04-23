import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSkypeAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.14 11.813a5.076 5.076 0 00-1.292-.593c-.28-.085-.59-.168-.91-.247-.28-.078-.612-.158-1.022-.248a9.315 9.315 0 01-1.436-.424 1.496 1.496 0 01-.616-.447.843.843 0 01-.16-.566.967.967 0 01.205-.597 1.598 1.598 0 01.7-.475A4.012 4.012 0 0112.031 8a3.787 3.787 0 011.106.146 2.083 2.083 0 01.663.322 1.235 1.235 0 01.325.343 1 1 0 101.761-.948 3.147 3.147 0 00-.837-.958 4.006 4.006 0 00-1.319-.669A5.768 5.768 0 0012.032 6a5.963 5.963 0 00-2.145.35A3.552 3.552 0 008.31 7.492a2.977 2.977 0 00-.604 1.797 2.839 2.839 0 00.58 1.792 3.5 3.5 0 001.438 1.072 10.582 10.582 0 001.307.408c.008.003.014.01.022.012.192.058.498.135.94.23.173.038.335.079.497.12.016.004.039.009.054.014l.018.002c.248.064.487.129.706.196a3.023 3.023 0 01.763.344 1.127 1.127 0 01.363.368 1.201 1.201 0 01.118.585 1.152 1.152 0 01-.214.732 1.763 1.763 0 01-.802.585 3.787 3.787 0 01-1.487.252 3.689 3.689 0 01-1.703-.344 1.756 1.756 0 01-.616-.547 1.016 1.016 0 01-.202-.503 1 1 0 00-2 0 2.94 2.94 0 00.556 1.64 3.774 3.774 0 001.342 1.187 5.621 5.621 0 002.623.567 5.708 5.708 0 002.254-.405 3.71 3.71 0 001.665-1.273 3.146 3.146 0 00.584-1.926 3.09 3.09 0 00-.375-1.53 3.165 3.165 0 00-.997-1.053zm7.221 1.878A10.491 10.491 0 0010.31 1.64a6.499 6.499 0 00-8.67 8.67A10.491 10.491 0 0013.69 22.36a6.499 6.499 0 008.67-8.67zM16.5 21a4.506 4.506 0 01-2.17-.558 1.004 1.004 0 00-.677-.106A8.492 8.492 0 013.5 12a8.583 8.583 0 01.164-1.654 1.003 1.003 0 00-.106-.677A4.5 4.5 0 019.67 3.558a1 1 0 00.678.106A8.492 8.492 0 0120.5 12a8.583 8.583 0 01-.164 1.654 1.003 1.003 0 00.106.677A4.499 4.499 0 0116.5 21z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSkypeAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
