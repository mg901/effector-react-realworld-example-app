import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import * as model from '../model';

export const EditMode = () => {
  const canModify = model.selectors.useCanModify();
  const { slug } = model.selectors.useArticle();

  const handleDeleteArticle = () => {
    model.articleDeleted(slug);
  };

  return canModify ? (
    <span>
      <Link to={`/editor/${slug}`}>
        <Button className="btn-outline-secondary" size="sm">
          <i className="ion-edit" /> Edit Article
        </Button>
      </Link>

      <Button
        className="btn-sm btn-outline-danger"
        onClick={handleDeleteArticle}
      >
        <i className="ion-trash-a" /> Delete Article
      </Button>
    </span>
  ) : null;
};
