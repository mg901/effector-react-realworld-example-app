import * as model from '../model';

export const ProfileTitle = () => {
  const username = model.selectors.useProfileUsername();

  return <h4>{username}</h4>;
};
