import { useStore } from 'effector-react';
import { model } from 'shared/user';
import { Banner as UIBanner, Container } from 'ui';
import { APP_NAME } from 'config';

export const Banner: React.FC = () => {
  const isAuth = useStore(model.$isAuthorized);

  return isAuth ? null : (
    <UIBanner>
      <Container>
        <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
        <p>A place to share your Effector knowledge.</p>
      </Container>
    </UIBanner>
  );
};
