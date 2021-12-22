type Props = Readonly<{
  className?: string;
}>;

export const Container: React.FC<Props> = ({ className = '', children }) => (
  <div className={`container ${className}`}>{children}</div>
);
