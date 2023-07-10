import { memo, SVGProps } from 'react';

const Ellipse40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1.5} cy={1.5} r={1.5} transform='matrix(-1 8.74228e-08 8.74228e-08 1 3.00006 0)' fill='#272727' />
  </svg>
);
const Memo = memo(Ellipse40Icon);
export { Memo as Ellipse40Icon };
