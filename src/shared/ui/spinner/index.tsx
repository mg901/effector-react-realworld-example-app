import { forwardRef } from 'react';
import styles from './index.module.css';

type Props = Readonly<{
  show?: boolean;
}>;

export const Spinner = forwardRef<HTMLDivElement, Props>(
  ({ show = true }, ref) => {
    return show ? (
      <div className={`${styles.spinner} text-success`} ref={ref}>
        <span className="sr-only" />
      </div>
    ) : null;
  },
);
