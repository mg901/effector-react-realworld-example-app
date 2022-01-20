import { useGate } from 'effector-react';
import { AddCommentForm } from '@/features/add-comment';
import { Row, Page, Spinner } from '@/shared/ui';
import * as model from './model';
import { CommentsList } from './ui/comments-list';
import { Content } from './ui/content';
import { Header } from './ui/header';
import { LogoutMessage } from './ui/logout-message';

const ArticlePage = () => {
  useGate(model.Gate);
  const slug = model.selectors.useSlug();
  const loading = model.selectors.useGetArticlePending();

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
            <LogoutMessage />
            <AddCommentForm slug={slug} />
            <CommentsList />
          </div>
        </Row>
      </Page>
    </div>
  );
};

export default ArticlePage;
