import Markdown from 'markdown-to-jsx';
import { Row } from '@/shared/ui';
import { selectors } from '../model';
import { Tags } from './tags';

export const Content = () => {
  const { body } = selectors.useArticle();

  return (
    <Row className="article-content">
      <div className="col-xs-12">
        <p>
          <Markdown>{body}</Markdown>
        </p>
        <Tags />
      </div>
    </Row>
  );
};
