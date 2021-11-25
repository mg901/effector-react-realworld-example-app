import { useParams, Link } from 'shared/library/router';
import { types, model } from '../model';
import { ButtonDelete } from './button-delete';

export type CommentFooterProps = Pick<
  types.Comment,
  'author' | 'createdAt' | 'id'
>;

export const Footer: React.FC<CommentFooterProps> = ({
  author,
  createdAt,
  id,
}) => {
  const { slug } = useParams<{ slug: string }>();

  const handleDeleteComment = () => {
    model.commentDeleted({ slug, id });
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
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
      <ButtonDelete author={author} onClick={handleDeleteComment} />
    </div>
  );
};
