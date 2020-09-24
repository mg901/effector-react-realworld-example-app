import React from 'react';
import { model } from 'features/user';
import { Page, Row, Button } from 'ui';
import { Form } from './form';
import '../model/init';

export const SettingsPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>
        <Form />
        <hr />

        <Button
          className="btn-outline-danger"
          onClick={() => model.loggedOutClicked()}>
          Or click here to logout.
        </Button>
      </div>
    </Row>
  </Page>
);
