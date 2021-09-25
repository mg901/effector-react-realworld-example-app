import { forwardRef } from 'react';
import './index.css';

type Props = Readonly<{
  loading: boolean;
}>;

export const Spinner = forwardRef<HTMLDivElement, Props>(({ loading }, ref) =>
  !loading ? null : (
    <div className="spinner-border text-success" ref={ref}>
      <span className="sr-only" />
    </div>
  ),
);
