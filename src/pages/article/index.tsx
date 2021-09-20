import { useGate, useStore } from 'effector-react';
import { useParams } from 'shared/library/router';
import { Row, Page } from 'shared/ui';

import { Comments } from './comments';
import * as model from './model';
import { Content } from './ui/content';
import { Header } from './ui/header';
import { LogoutMessage } from './ui/logout-message';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  useGate(model.Gate, { slug });
  const loading = useStore(model.fetchArticleFx.pending);

  return (
    <>
      {!loading && (
        <div className="article-page">
          <Header />
          <Page>
            <Content />
            <hr />
            <div className="article-actions" />
            <Row>
              <div className="col-xs-12 col-md-8 offset-md-2">
                <Comments slug={slug} />
                <LogoutMessage />
              </div>
            </Row>
          </Page>
        </div>
      )}
    </>
  );
};

export default ArticlePage;
