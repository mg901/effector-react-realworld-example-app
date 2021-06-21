import Markdown from 'markdown-to-jsx';
import { Row } from 'shared/ui';
import * as article from '../model';
import { Tags } from './tags';

export const Content: React.FC = () => {
  const { body } = article.selectors.useArticle();

  return (
    <Row className="article-content">
      <div className="col-xs-12">
        <Markdown>{body}</Markdown>
        <Tags />
      </div>
    </Row>
  );
};
