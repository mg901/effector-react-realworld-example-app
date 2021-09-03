type Props = Readonly<{
  show: boolean;
}>;

export const EmptyArticles: React.FC<Props> = ({ show }) =>
  !show ? null : (
    <div className="empty-articles article-preview">
      No articles are here... yet.
    </div>
  );
