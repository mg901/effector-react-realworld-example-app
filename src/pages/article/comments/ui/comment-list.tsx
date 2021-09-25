import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useList } from 'effector-react';
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
