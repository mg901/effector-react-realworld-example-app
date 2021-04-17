import { useStore } from 'effector-react';
import Markdown from 'markdown-to-jsx';
import { Row } from 'ui';
import * as model from '../model';
import { Tags } from './tags';

export const Content: React.FC = () => {
  const { body } = useStore(model.$article);

  return (
    <Row className="article-content">
      <div className="col-xs-12">
        <Markdown>{body}</Markdown>
        <Tags />
      </div>
    </Row>
  );
};
