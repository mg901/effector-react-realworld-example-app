import { AuthCosumer } from 'router';
import { Banner as UIBanner, Container } from 'ui';
import { APP_NAME } from 'config';

export const LogoutBanner: React.FC = () => (
  <AuthCosumer>
    {({ isAuth }) =>
      isAuth ? null : (
        <UIBanner>
          <Container>
            <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
            <p>A place to share your Effector knowledge.</p>
          </Container>
        </UIBanner>
      )
    }
  </AuthCosumer>
);
