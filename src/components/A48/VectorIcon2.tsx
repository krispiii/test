import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.8125 3.1244e-05L7.00033 2.55256L8.51983 1.00003L9.375 4.00003L2.8125 11L10.8563 5.28003L15 8.00003L-4.47035e-07 14L2.8125 3.1244e-05Z'
      fill='#1E90E1'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
