import { Link } from 'react-router-dom';
import * as router from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { Errors, Form } from './ui';

export const Registration: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign Up</h1>

        <p className="text-xs-center">
          <Link to={router.URLS.LOGIN}>Have an account?</Link>
        </p>
        <Errors />
        <Form />
      </div>
    </Row>
  </Page>
);

export default Registration;
