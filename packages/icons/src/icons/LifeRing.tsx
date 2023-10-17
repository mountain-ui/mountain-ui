import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLifeRing = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    data-name=''
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M22 11.05v-.33l-.09-.6-.09-.39c0-.17-.08-.34-.13-.51s-.08-.27-.13-.4a2.17 2.17 0 0 1-.07-.24s0 0 0-.05a10.1 10.1 0 0 0-5.9-5.9s0 0-.05 0l-.23-.07-.42-.13c-.15 0-.31-.08-.46-.12l-.46-.1-.46-.07c-.16 0-.31 0-.48-.06s-.35 0-.52 0L12 2h-.91c-.17 0-.32 0-.48.06l-.46.07-.46.1c-.15 0-.31.07-.46.12l-.42.13-.23.07h-.05a10.1 10.1 0 0 0-5.9 5.9s0 0 0 .05a2.17 2.17 0 0 1-.07.24c0 .13-.09.26-.13.4s-.09.34-.13.51l-.09.39-.09.6v2.56l.09.6.09.39c0 .17.08.34.13.51s.08.27.13.4a2.17 2.17 0 0 1 .07.24.43.43 0 0 1 0 .07 10 10 0 0 0 5.89 5.88s0 0 .05 0l.24.07.4.13.51.13.39.09.6.09h.33c.31 0 .63.05.95.05s.64 0 .95-.05h.33l.6-.09.39-.09.51-.13.4-.13.24-.07h.05a10 10 0 0 0 5.89-5.88.43.43 0 0 1 0-.07c0-.08.05-.16.07-.24s.09-.26.13-.4.09-.34.13-.51l.09-.39.09-.6v-.33c0-.31.05-.63.05-.95s.09-.56.09-.87Zm-6.3-6.16a8 8 0 0 1 3.46 3.46l-2.86 1a5.14 5.14 0 0 0-1.64-1.64Zm-5.36-.7c.21-.05.41-.08.61-.11h.24a8.24 8.24 0 0 1 1.72 0h.24c.2 0 .4.06.61.11h.06l-1 2.86A4.49 4.49 0 0 0 12 7a4.4 4.4 0 0 0-.73.06l-1-2.86Zm-1.94.7 1 2.86a5.14 5.14 0 0 0-1.65 1.64l-2.86-1a8 8 0 0 1 3.46-3.5Zm-4.21 8.82a4.17 4.17 0 0 1-.1-.6v-.25a7.42 7.42 0 0 1 0-1.72v-.25a4.17 4.17 0 0 1 .1-.6s0 0 0-.06l2.86 1a4.47 4.47 0 0 0 0 1.46l-2.86 1v.02Zm4.16 5.4a8 8 0 0 1-3.46-3.46l2.86-1a5.14 5.14 0 0 0 1.64 1.64Zm5.36.7c-.21.05-.41.08-.61.11h-.24a8.24 8.24 0 0 1-1.72 0h-.24c-.2 0-.4-.06-.61-.11h-.06l1-2.86a4.47 4.47 0 0 0 1.46 0l1 2.86Zm-.67-5c-.17.06-.34.1-.5.14a2.73 2.73 0 0 1-1 0c-.16 0-.33-.08-.5-.14A3 3 0 0 1 9.2 13a3.23 3.23 0 0 1-.14-.51 2.63 2.63 0 0 1 0-1 3.23 3.23 0 0 1 .13-.49A3 3 0 0 1 11 9.2c.17-.06.34-.1.5-.14a2.73 2.73 0 0 1 1 0c.16 0 .33.08.5.14a3 3 0 0 1 1.8 1.8 3.23 3.23 0 0 1 .14.51 2.63 2.63 0 0 1 0 1 3.23 3.23 0 0 1-.14.51A3 3 0 0 1 13 14.8Zm2.61 4.31-1-2.86a5.14 5.14 0 0 0 1.64-1.64l2.86 1a8 8 0 0 1-3.5 3.49ZM20 12.86v.25a4.17 4.17 0 0 1-.1.6s0 0 0 .06l-2.86-1a4.47 4.47 0 0 0 0-1.46l2.86-1v.06a4.17 4.17 0 0 1 .1.6v.25a7.42 7.42 0 0 1 0 1.72Z' />
  </svg>
);
export default SvgLifeRing;
