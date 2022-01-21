import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as model from '../model';
import { ButtonDelete } from './button-delete';

export type CommentFooterProps = Pick<
  model.types.CommentType,
  'author' | 'createdAt' | 'id'
>;

export const CommentFooter = ({
  author,
  createdAt,
  id,
}: CommentFooterProps) => {
  const date = useMemo(() => new Date(createdAt).toDateString(), [createdAt]);

  const handleDeleteComment = () => {
    model.commentDeleted(id);
  };

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
      <span className="date-posted">{date}</span>
      <ButtonDelete author={author} onClick={handleDeleteComment} />
    </div>
  );
};
