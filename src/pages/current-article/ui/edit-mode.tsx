import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { Button } from '@/shared/ui';
import * as article from '@/entities/foo';
import * as currentArticle from '../model';

export const EditMode = () => {
  const history = useHistory();
  const canModify = currentArticle.selectors.useCanModifyArticle();
  const { slug } = currentArticle.selectors.useCurrentArticle();

  useEffect(() => {
    return article.store.removeArticleFx.done.watch(() => {
      history.push(ROUTES.root);
    });
  }, [history]);

  const handleDeleteArticle = () => {
    article.store.removeArticleFx(slug);
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
