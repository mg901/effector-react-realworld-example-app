import { Link } from 'react-router-dom';
import { URLS } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { ErrorList } from 'widgets/error-list';
import { Form } from './ui/form';

const LoginPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign In</h1>

        <p className="text-xs-center">
          <Link to={URLS.REGISTRATION}>Need an account?</Link>
        </p>

        <ErrorList />
        <Form />
      </div>
    </Row>
  </Page>
);

export default LoginPage;
