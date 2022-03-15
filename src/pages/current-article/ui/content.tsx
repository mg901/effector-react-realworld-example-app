import Markdown from 'markdown-to-jsx';
import { Row } from '@/shared/ui';
import * as currentArticle from '../model';
import { Tags } from './tags';

export const Content = () => {
  const { body } = currentArticle.selectors.useCurrentArticle();

  return (
    <Row className="article-content">
      <div className="col-xs-12">
        <Markdown>{body}</Markdown>

        <Tags />
      </div>
    </Row>
  );
};
