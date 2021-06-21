import { Link } from 'react-router-dom';
import { Button } from 'shared/ui';
import * as article from '../model';

export const EditMode: React.FC = () => {
  const canModify = article.selectors.useCanModify();
  const { slug } = article.selectors.useArticle();

  return (
    <>
      {canModify && (
        <span>
          <Link to={`/editor/${slug}`}>
            <Button className="btn-sm btn-outline-secondary">
              <i className="ion-edit" /> Edit Article
            </Button>
          </Link>

          <Button
            className="btn-sm btn-outline-danger"
            onClick={article.model.articleDeleted}>
            <i className="ion-trash-a" /> Delete Article
          </Button>
        </span>
      )}
    </>
  );
};
