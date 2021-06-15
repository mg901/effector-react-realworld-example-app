type Props = Readonly<{
  className?: string;
}>;

export const Row: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`row ${className}`}>{children}</div>
);
