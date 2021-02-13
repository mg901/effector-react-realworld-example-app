import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import * as model from '../model';

export const EditMode: React.FC = () => {
  const canModify = useStore(model.$canModify);
  const { slug } = useStore(model.$article);

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
            onClick={model.articleDeleted}>
            <i className="ion-trash-a" /> Delete Article
          </Button>
        </span>
      )}
    </>
  );
};
