import { useGate } from 'effector-react';
import { Comments } from '@/entities/comment';
import { Row, Page, Spinner } from '@/shared/ui';
import * as model from './model';
import { Content } from './ui/content';
import { Header } from './ui/header';

const ArticlePage = () => {
  useGate(model.Gate);
  const slug = model.selectors.useSlug();
  const comments = model.selectors.useComments();
  const loading = model.selectors.useGetArticleLoading();

  return loading ? (
    <Spinner />
  ) : (
    <div className="article-page">
      <Header />
      <Page>
        <Content />
        <hr />
        <div className="article-actions" />
        <Row>
          <div className="col-xs-12 col-md-8 offset-md-2">
            <Comments comments={comments} slug={slug} />
          </div>
        </Row>
      </Page>
    </div>
  );
};

export default ArticlePage;
