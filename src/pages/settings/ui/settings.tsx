import React from 'react';
import { useGate } from 'effector-react';
import * as user from 'features/user';
import { Page, Row, Button } from 'ui';
import { model } from '../model';
import { Errors } from './errors';
import { Form } from './form';
import '../model/init';

export const SettingsPage: React.FC = () => {
  useGate(model.PageGate);

  return (
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
};
