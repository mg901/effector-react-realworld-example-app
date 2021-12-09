import * as model from '../model';

export const ProfileBio = () => {
  const bio = model.selectors.useBio();

  return bio ? <p>{bio}</p> : null;
};
