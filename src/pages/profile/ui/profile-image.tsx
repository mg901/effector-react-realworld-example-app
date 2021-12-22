import * as model from '../model';

export const ProfileImage = () => {
  const username = model.selectors.useUserName();
  const image = model.selectors.useImage();

  return <img alt={username} className="user-img" src={image} />;
};
