import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Row, Page } from 'shared/ui';
import { Comments } from './comments';
import * as article from './model';
import { Content, Header, LogoutMessage } from './ui';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  useGate(article.model.Gate, { slug });
  const loading = article.selectors.useLoadArticle();

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

export default Article;
