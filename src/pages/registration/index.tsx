import { Link, Redirect } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { Page, Row } from '@/shared/ui';
import { RegistrationForm, Error } from './ui';

const RegistrationPage = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to={ROUTES.root} />
  ) : (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign Up</h1>

          <p className="text-xs-center">
            <Link to={ROUTES.login}>Have an account?</Link>
          </p>
          <Error />
          <RegistrationForm />
        </div>
      </Row>
    </Page>
  );
};

export default RegistrationPage;
