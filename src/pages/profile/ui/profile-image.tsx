import * as model from '../model';

export const ProfileImage = () => {
  const username = model.selectors.useProfileUsername();
  const image = model.selectors.useProfileImage();
  const showImage = username && image;

  return showImage ? (
    <img alt={username} className="user-img" src={image} />
  ) : null;
};
