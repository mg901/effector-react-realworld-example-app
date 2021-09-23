import * as user from 'entities/user';
import { Page, Row, Button } from 'shared/ui';
import { ErrorList } from 'widgets/error-list';
import { SettingsForm } from './ui/form';

const SettingsPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>
        <ErrorList />
        <SettingsForm />
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

export default SettingsPage;
