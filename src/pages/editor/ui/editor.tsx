import React from 'react';
import { Page, Row, Button } from 'ui';
import { AddTag } from '../add-tag';
import { model } from '../model';
import { Form } from './form';
import { TagList } from './tag-list';

import '../model/init';

export const EditorPage: React.FC = () => (
  <Page>
    <Row>
      <div className="col-md-10 offset-md-1 col-xs-12">
        <Form />
        <AddTag />
        <TagList />

        <Button
          type="submit"
          form="editor"
          className="btn-lg pull-xs-right btn-primary"
          onClick={model.formSubmitted}>
          Publish article
        </Button>
      </div>
    </Row>
  </Page>
);
