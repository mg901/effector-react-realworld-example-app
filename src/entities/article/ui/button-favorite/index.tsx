import { Button } from 'shared/ui';
import { types } from '../../model';
import './index.css';

type Props = Readonly<
  Pick<types.Article, 'slug' | 'favorited' | 'favoritesCount'> & {
    onClick: (payload: types.SelectedArticle) => void;
  }
>;

export const ButtonFavorite: React.FC<Props> = ({
  slug,
  favorited,
  favoritesCount,
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick({ slug, favorited, favoritesCount });
  };

  return (
    <Button
      className="button-favorite btn-outline-primary"
      data-active={favorited}
      size="sm"
      onClick={handleClick}
    >
      <i className="ion-heart" /> {children}
    </Button>
  );
};
