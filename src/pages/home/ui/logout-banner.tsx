import * as visitor from 'entities/visitor';
import { APP_NAME } from 'shared/constants';
import { Banner as BannerUi, Container } from 'shared/ui';

export const LogoutBanner: React.FC = () => {
  const isAuth = visitor.selectors.useIsAuth();

  return isAuth ? null : (
    <BannerUi>
      <Container>
        <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
        <p>A place to share your Effector knowledge.</p>
      </Container>
    </BannerUi>
  );
};
