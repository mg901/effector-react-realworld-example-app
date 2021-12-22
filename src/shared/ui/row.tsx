import { memo } from 'react';

type Props = Readonly<{
  className?: string;
}>;

export const Row: React.FC<Props> = memo(({ children, className = '' }) => (
  <div className={`row ${className}`}>{children}</div>
));
