import { memo, SVGProps } from 'react';

const Ellipse42Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1.50006} cy={1.5} r={1.5} transform='rotate(180 1.50006 1.5)' fill='#272727' />
  </svg>
);
const Memo = memo(Ellipse42Icon);
export { Memo as Ellipse42Icon };
