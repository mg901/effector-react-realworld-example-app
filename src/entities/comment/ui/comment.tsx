import { CommentFooter } from './comment-footer';

type Props = Readonly<{
  data: types.Comment;
}>;

export const Comment: React.FC<Props> = ({ data }) => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">{data.body}</p>
    </div>
    <CommentFooter {...data} />
  </div>
);
