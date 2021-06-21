import * as user from 'shared/entities/user';
import { Page, Row, Button } from 'shared/ui';
import { Errors, Form } from './ui';

const Settings: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>
        <Errors />
        <Form />
        <hr />

        <Button
          className="btn-outline-danger"
          onClick={user.model.loggedOutClicked}>
          Or click here to logout.
        </Button>
      </div>
    </Row>
  </Page>
);

export default Settings;
