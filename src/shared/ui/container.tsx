type Props = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

export const Container = ({ className = '', children }: Props) => (
  <div className={`container ${className}`}>{children}</div>
);
