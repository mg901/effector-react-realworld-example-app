type Props = Readonly<{
  show: boolean;
}>;

export const EmptyFeed = ({ show }: Props) =>
  show ? (
    <div className="empty-articles article-preview">
      No articles are here... yet.
    </div>
  ) : null;
