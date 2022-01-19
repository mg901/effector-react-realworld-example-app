import * as model from '../model';

export const ProfileBio = () => {
  const bio = model.selectors.useProfileBio();

  return bio ? <p>{bio}</p> : null;
};
