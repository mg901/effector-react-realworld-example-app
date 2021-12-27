type Props = Readonly<{
  children: React.ReactNode;
}>;

export const TagsWrapper = ({ children }: Props) => (
  <ul className="tag-list">{children}</ul>
);
