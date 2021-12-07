import { forwardRef } from 'react';
import './index.css';

type Props = Readonly<{
  show?: boolean;
}>;

export const Spinner = forwardRef<HTMLDivElement, Props>(
  ({ show = true }, ref) => {
    return !show ? null : (
      <div className="spinner-border text-success" ref={ref}>
        <span className="sr-only" />
      </div>
    );
  },
);
