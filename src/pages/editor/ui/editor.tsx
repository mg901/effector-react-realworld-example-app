import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate } from 'effector-react';
import { Page, Row } from 'ui';
import { AddTag } from '../add-tag';
import { model } from '../model';
import { Form } from './form';
import { SubmitButton } from './submit-button';
import { TagList } from './tag-list';

import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const EditorPage: React.FC<Props> = ({ location }) => {
  useGate(model.PageGate, { path: location.pathname });

  return (
    <Page>
      <Row>
        <div className="col-md-10 offset-md-1 col-xs-12">
          <Form />
          <AddTag />
          <TagList />
          <SubmitButton />
        </div>
      </Row>
    </Page>
  );
};
