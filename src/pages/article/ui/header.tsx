import { useStore } from 'effector-react';
import * as article from 'entities/article';
import { Container, Banner } from 'shared/ui';
import * as model from '../model';
import { EditMode } from './edit-mode';

export const Header: React.FC = () => {
  const { title, author, createdAt } = useStore(model.$article);

  return (
    <Banner>
      <Container>
        <h1>{title}</h1>
        <article.ArticleMeta author={author} createdAt={createdAt}>
          <EditMode />
        </article.ArticleMeta>
      </Container>
    </Banner>
  );
};
