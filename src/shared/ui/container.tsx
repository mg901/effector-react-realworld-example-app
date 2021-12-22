import { memo } from 'react';

type Props = Readonly<{
  className?: string;
}>;

export const Container: React.FC<Props> = memo(
  ({ className = '', children }) => (
    <div className={`container ${className}`}>{children}</div>
  ),
);
