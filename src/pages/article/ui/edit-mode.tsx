import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { Button } from 'shared/ui';
import { model, selectors } from '../model';

export const EditMode: React.FC = () => {
  const canModify = selectors.useCanModify();
  const { slug } = useStore(model.$article);

  const handleDeleteArticle = () => {
    model.articleDeleted(slug);
  };

  return (
    <>
      {canModify && (
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
      )}
    </>
  );
};
