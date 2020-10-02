import React from 'react';
import { Link } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Paths } from 'library/router';
import { Page, Row } from 'ui';
import { model } from '../model';
import { Errors } from './errors';
import { Form } from './form';
import '../model/init';

export const LoginPage: React.FC = () => {
  useGate(model.PageGate);

  return (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>

          <p className="text-xs-center">
            <Link to={Paths.REGISTRATION}>Need an account?</Link>
          </p>

          <Errors />
          <Form />
        </div>
      </Row>
    </Page>
  );
};
