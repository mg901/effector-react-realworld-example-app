import React from 'react';
import { Page, Form, FormGroup, Button } from 'ui';
import { model } from '../model';
import { AddTagForm } from './add-tag-form';
import { InputField } from './input-field';
import { TagList } from './tag-list';
import { TextField } from './text-field';
import '../model/init';

export const EditorPage: React.FC = () => (
  <Page>
    <div className="row">
      <div className="col-md-10 offset-md-1 col-xs-12">
        <Form
          id="editor"
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <FormGroup>
            <InputField
              name="title"
              placeholder="Article Title"
              onChange={model.handleFieldChanged}
              className="form-control form-control-lg"
            />
          </FormGroup>

          <FormGroup>
            <InputField
              name="description"
              placeholder="What's this article about?"
              onChange={model.handleFieldChanged}
              className="form-control"
            />
          </FormGroup>

          <FormGroup>
            <TextField
              name="body"
              rows={8}
              placeholder="Write your article (in markdown)"
              className="form-control"
              onChange={model.handleFieldChanged}
            />
          </FormGroup>
        </Form>
        <AddTagForm />
        <TagList />

        <Button
          type="submit"
          form="editor"
          className="btn-lg pull-xs-right btn-primary">
          Publish article
        </Button>
      </div>
    </div>
  </Page>
);
