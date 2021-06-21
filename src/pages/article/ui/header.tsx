import { ArticleMeta } from 'shared/feed';
import { Container, Banner } from 'shared/ui';
import * as article from '../model';
import { EditMode } from './edit-mode';

export const Header: React.FC = () => {
  const { title, author, createdAt } = article.selectors.useArticle();

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
