import * as article from '@/entities/article';
import { Container, Banner } from '@/shared/ui';
import { selectors } from '../model';
import { EditMode } from './edit-mode';

export const Header = () => {
  const { title, author, createdAt } = selectors.useArticle();

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
