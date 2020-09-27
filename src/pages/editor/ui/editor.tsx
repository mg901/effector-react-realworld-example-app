import React from 'react';
import { Page, Row } from 'ui';
import { AddTag } from '../add-tag';
import { Form } from './form';
import { SubmitButton } from './submit-button';
import { TagList } from './tag-list';

import '../model/init';

export const EditorPage: React.FC = () => (
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
