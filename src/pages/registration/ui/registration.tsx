import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../../library/router';
import { Page, Row } from '../../../ui';
import { Errors } from './errors';
import { Form } from './form';
import '../model/init';

export const RegistrationPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign Up</h1>

        <p className="text-xs-center">
          <Link to={Paths.LOGIN}>Have an account?</Link>
        </p>
        <Errors />
        <Form />
      </div>
    </Row>
  </Page>
);
