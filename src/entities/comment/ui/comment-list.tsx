import { useEffect } from 'react';
import { useList } from 'effector-react';
import { List } from '@/shared/ui';
import * as model from '../model';
import { Comment } from './comment';

type Props = Readonly<{
  slug: string;
}>;

export const CommentsList = ({ slug }: Props) => {
  useEffect(() => {
    if (slug) {
      model.getCommentsFx(slug);
    }
  }, [slug]);

  return (
    <List>
      {useList(model.$comments, {
        getKey: (comment) => comment.id,
        fn: (comment) => (
          <Comment
            author={comment.author}
            body={comment.body}
            createdAt={comment.createdAt}
            id={comment.id}
          />
        ),
      })}
    </List>
  );
};
