import { useStore } from 'effector-react';
import { ArticleMeta } from 'shared/feed';
import { Container, Banner } from 'ui';
import * as model from '../model';
import { EditMode } from './edit-mode';

export const Header: React.FC = () => {
  const { title, author, createdAt } = useStore(model.$article);

  return (
    <Banner>
      <Container>
        <h1>{title}</h1>
        <ArticleMeta author={author} createdAt={createdAt}>
          <EditMode />
        </ArticleMeta>
      </Container>
    </Banner>
  );
};
