import { useParams } from 'react-router-dom';
import { useGate, useStore } from 'effector-react';
import { Row, Page } from 'ui';
import { Comments } from './comments';
import * as model from './model';
import { Content } from './ui/content';
import { Header } from './ui/header';

type Params = Readonly<{
  slug: string;
}>;

const Article: React.FC = () => {
  const { slug: id } = useParams<Params>();
  useGate(model.Gate, { slug: id });
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
              <Comments slug={id} />
              <div />
            </Row>
          </Page>
        </div>
      )}
    </>
  );
};

export default Article;
