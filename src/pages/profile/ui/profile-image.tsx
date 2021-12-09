import * as model from '../model';

export const ProfileImage = () => {
  const username = model.selectors.useUsername();
  const image = model.selectors.useImage();

  return <img alt={username} className="user-img" src={image} />;
};
