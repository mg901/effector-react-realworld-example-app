import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Comments } from '@/entities/comment';
import { Row, Page, Spinner } from '@/shared/ui';
import * as model from './model';
import { Content } from './ui/content';
import { Header } from './ui/header';
import { LogoutMessage } from './ui/logout-message';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const loading = model.selectors.useGetArticlePending();

  useLayoutEffect(() => {
    if (slug) {
      model.getArticleFx(slug);
    }
  }, [slug]);

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
            <Comments />
            <LogoutMessage />
          </div>
        </Row>
      </Page>
    </div>
  );
};

export default ArticlePage;
