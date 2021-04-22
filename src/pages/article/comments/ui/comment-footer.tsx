import { Link } from 'react-router-dom';
import { commentDeleted } from '../model';
import * as types from '../model/types';
import { ButtonDelete } from './button-delete';

export const CommentFooter: React.FC<types.Comment> = ({
  author,
  createdAt,
  id,
}) => {
  return (
    <div className="card-footer">
      <Link className="comment-author" to={`/@${author.username}`}>
        <img
          alt={author.username}
          className="comment-author-img"
          src={author.image}
        />
      </Link>
      &nbsp;
      <Link className="comment-author" to={`/@${author.username}`}>
        {author.username}
      </Link>
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
      <ButtonDelete author={author} onClick={() => commentDeleted(id)} />
    </div>
  );
};
