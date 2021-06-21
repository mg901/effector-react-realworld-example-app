import { APP_NAME } from 'shared/config';
import * as user from 'shared/entities/user';
import { Banner as UIBanner, Container } from 'shared/ui';

export const LogoutBanner: React.FC = () => {
  const isAuth = user.selectors.useIsAuth();

  if (isAuth) return null;

  return (
    <UIBanner>
      <Container>
        <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
        <p>A place to share your Effector knowledge.</p>
      </Container>
    </UIBanner>
  );
};