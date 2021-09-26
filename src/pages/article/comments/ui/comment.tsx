import { useParams } from 'react-router-dom';
import { Link } from 'shared/library/router';
import { types, model } from '../model';
import { ButtonDelete } from './button-delete';

type Props = Readonly<{
  data: types.Comment;
}>;

export function Comment({ data }: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{data.body}</p>
      </div>
      <Footer {...data} />
    </div>
  );
}

export function Footer({
  author,
  createdAt,
  id,
}: Readonly<types.Comment>): JSX.Element {
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
}
