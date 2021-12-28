import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useList } from 'effector-react';
import { List } from '@/shared/ui';
import * as model from '../model';
import { Comment } from './comment';

export const CommentsList = () => {
  const { slug } = useParams<{ slug: string }>();

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
