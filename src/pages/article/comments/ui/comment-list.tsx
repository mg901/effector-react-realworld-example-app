import { useEffect } from 'react';
import { useList } from 'effector-react';
import { useParams } from 'shared/library/router';
import { List } from 'shared/ui';
import { model } from '../model';
import { Comment } from './comment';

export const CommentsList: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (slug) {
      model.getCommentsFx(slug);
    }
  }, [slug]);

  return (
    <List>
      {useList(model.$comments, {
        getKey: (item) => item.id,
        fn: (item) => <Comment data={item} />,
      })}
    </List>
  );
};
