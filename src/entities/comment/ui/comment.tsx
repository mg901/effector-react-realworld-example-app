import { types } from '../model';
import { CommentFooterProps, Footer } from './comment-footer';

type Props = CommentFooterProps & Pick<types.Comment, 'body'>;

export const Comment: React.FC<Props> = ({ body, ...props }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <Footer {...props} />
    </div>
  );
};
