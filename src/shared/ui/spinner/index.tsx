import { forwardRef } from 'react';
import './index.css';

type Props = Readonly<{
  show: boolean;
}>;

export const Spinner = forwardRef<HTMLDivElement, Props>(({ show }, ref) =>
  !show ? null : (
    <div className="spinner-border text-success" ref={ref}>
      <span className="sr-only" />
    </div>
  ),
);
