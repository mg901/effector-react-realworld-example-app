type Props = Readonly<{
  children: React.ReactNode;
}>;

export const List = ({ children }: Props) => (
  <ul className="list-unstyled">{children}</ul>
);
