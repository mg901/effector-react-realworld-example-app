type Props = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

export const Row = ({ children, className = '' }: Props) => (
  <div className={`row ${className}`}>{children}</div>
);
