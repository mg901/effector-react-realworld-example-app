import { Link, URLS } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { LoginForm, Error } from './ui';

const LoginPage: React.FC = () => {
  return (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>

          <p className="text-xs-center">
            <Link to={URLS.REGISTRATION}>Need an account?</Link>
          </p>

          <Error />
          <LoginForm />
        </div>
      </Row>
    </Page>
  );
};

export default LoginPage;
