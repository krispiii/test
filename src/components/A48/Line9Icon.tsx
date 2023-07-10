import { memo, SVGProps } from 'react';

const Line9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 239 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M239 2C240.105 2 241 1.10457 241 -3.37254e-07C241 -1.10457 240.105 -2 239 -2L239 2ZM6.80892e-05 -1.99996L-1.99993 -1.99996L-1.99993 2.00004L6.87637e-05 2.00004L6.80892e-05 -1.99996ZM239 -2L6.80892e-05 -1.99996L6.87637e-05 2.00004L239 2L239 -2Z'
      fill='#1A8CDB'
    />
  </svg>
);
const Memo = memo(Line9Icon);
export { Memo as Line9Icon };
