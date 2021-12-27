import { types } from '../model';
import { CommentFooterProps, Footer } from './comment-footer';

type Props = Readonly<CommentFooterProps & Pick<types.Comment, 'body'>>;

export const Comment = ({ body, ...props }: Props) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <Footer {...props} />
    </div>
  );
};
