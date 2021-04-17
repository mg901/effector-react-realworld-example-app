import { model } from 'shared/user';
import { Page, Row, Button } from 'ui';
import { Errors } from './ui/errors';
import { Form } from './ui/form';

const Settings: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>
        <Errors />
        <Form />
        <hr />

        <Button className="btn-outline-danger" onClick={model.loggedOutClicked}>
          Or click here to logout.
        </Button>
      </div>
    </Row>
  </Page>
);

export default Settings;
