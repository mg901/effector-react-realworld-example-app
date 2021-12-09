type Props = Readonly<{
  show: boolean;
}>;

export const EmptyFeed: React.FC<Props> = ({ show }) =>
  show ? (
    <div className="empty-articles article-preview">
      No articles are here... yet.
    </div>
  ) : null;
