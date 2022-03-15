import { Container, Banner } from '@/shared/ui';
import * as article from '@/entities/article';
import * as currentArticle from '../model';
import { EditMode } from './edit-mode';

export const Header = () => {
  const current = currentArticle.selectors.useCurrentArticle();

  return (
    <Banner>
      <Container>
        <h1>{current.title}</h1>
        <article.ArticleMeta
          author={current.author}
          createdAt={current.createdAt}
        >
          <EditMode />
        </article.ArticleMeta>
      </Container>
    </Banner>
  );
};
