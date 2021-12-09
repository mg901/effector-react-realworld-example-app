import * as model from '../model';

export const ProfileTitle = () => {
  const username = model.selectors.useUsername();

  return <h4>{username}</h4>;
};
