import { memo, SVGProps } from 'react';

const Line12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 371' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.00003 -2.62268e-07C2.00003 -1.10457 1.1046 -2 3.02553e-05 -2C-1.10454 -2 -1.99997 -1.10457 -1.99997 2.62268e-07L2.00003 -2.62268e-07ZM-1.99992 371L-1.99992 373L2.00008 373L2.00008 371L-1.99992 371ZM-1.99997 2.62268e-07L-1.99992 371L2.00008 371L2.00003 -2.62268e-07L-1.99997 2.62268e-07Z'
      fill='#1A8CDB'
    />
  </svg>
);
const Memo = memo(Line12Icon);
export { Memo as Line12Icon };
