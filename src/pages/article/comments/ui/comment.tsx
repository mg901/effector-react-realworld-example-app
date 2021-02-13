import * as types from '../model/types';
import { CommentFooter } from './comment-footer';

type Props = Readonly<{
  comment: types.Comment;
}>;

export const Comment: React.FC<Props> = ({ comment }) => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">{comment.body}</p>
    </div>
    <CommentFooter {...comment} />
  </div>
);
