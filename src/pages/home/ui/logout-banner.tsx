import { APP_NAME } from 'shared/config';
import { Banner as UIBanner, Container } from 'shared/ui';
import { AuthCosumer } from 'router';

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
