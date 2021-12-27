type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Tag = ({ children }: Props) => (
  <li className="tag-default tag-pill tag-outline">{children}</li>
);
