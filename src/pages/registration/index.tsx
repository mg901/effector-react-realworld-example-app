import { Link, URLS } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { ErrorList } from 'widgets/error-list';

import { RegistrationForm } from './ui/form';

export const RegistrationPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign Up</h1>

        <p className="text-xs-center">
          <Link to={URLS.LOGIN}>Have an account?</Link>
        </p>
        <ErrorList />
        <RegistrationForm />
      </div>
    </Row>
  </Page>
);

export default RegistrationPage;
