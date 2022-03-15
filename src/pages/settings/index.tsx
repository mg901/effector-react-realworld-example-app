import { Page, Row, Button } from '@/shared/ui';
import * as session from '@/entities/session';
import * as user from '@/entities/user';
import { SettingsForm } from './ui/form';

const SettingsPage = () => {
  const handleClick = () => {
    session.store.resetSession();
  };

  return (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>
          <user.Error />
          <SettingsForm />
          <hr />

          <Button className="btn-outline-danger" onClick={handleClick}>
            Or click here to logout.
          </Button>
        </div>
      </Row>
    </Page>
  );
};

export default SettingsPage;
