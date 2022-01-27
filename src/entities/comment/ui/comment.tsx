import { memo } from 'react';
import { types } from '../model';
import { CommentFooterProps, CommentFooter } from './comment-footer';

type Props = Readonly<CommentFooterProps & Pick<types.CommentType, 'body'>>;

export const Comment = memo(({ body, ...props }: Props) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <CommentFooter {...props} />
    </div>
  );
});
