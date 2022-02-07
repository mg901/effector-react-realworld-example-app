import { Link, Redirect } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { Page, Row } from '@/shared/ui';
import * as session from '@/entities/session';
import { LoginForm, Error } from './ui';

const LoginPage = () => {
  const isAuth = session.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to={ROUTES.root} />
  ) : (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>

          <p className="text-xs-center">
            <Link to={ROUTES.registration}>Need an account?</Link>
          </p>

          <Error />
          <LoginForm />
        </div>
      </Row>
    </Page>
  );
};

export default LoginPage;
