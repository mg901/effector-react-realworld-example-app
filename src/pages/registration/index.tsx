import { Link } from 'react-router-dom';
import { ErrorList } from 'features/error-list';
import { URLS } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { Form } from './ui/form';

export const Registration: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign Up</h1>

        <p className="text-xs-center">
          <Link to={URLS.LOGIN}>Have an account?</Link>
        </p>
        <ErrorList />
        <Form />
      </div>
    </Row>
  </Page>
);

export default Registration;
