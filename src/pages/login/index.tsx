import { Link } from 'react-router-dom';
import { Page, Row } from 'shared/ui';
import { Urls } from 'router';
import { Errors, Form } from './ui';

const Login: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign In</h1>

        <p className="text-xs-center">
          <Link to={Urls.REGISTRATION}>Need an account?</Link>
        </p>

        <Errors />
        <Form />
      </div>
    </Row>
  </Page>
);

export default Login;
