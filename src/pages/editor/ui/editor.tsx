import React from 'react';
import { Form, Button } from 'ui';
import { model } from '../model';
import { AddTagForm } from './add-tag-form';
import { InputField } from './input-field';
import { TagList } from './tag-list';
import { TextField } from './text-field';
import '../model/init';

export const EditorPage: React.FC = () => (
  <div className="container">
    <Form
      id="editor"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <h1>Editor</h1>
      <InputField
        name="title"
        placeholder="Article Title"
        onChange={model.handleFieldChanged}
      />
      <InputField
        name="description"
        placeholder="What's this article about?"
        onChange={model.handleFieldChanged}
      />
      <TextField
        name="body"
        placeholder="Write your article (in markdown)"
        onChange={model.handleFieldChanged}
      />
    </Form>
    <AddTagForm />
    <TagList />

    <Button type="submit" form="editor">
      Publish article
    </Button>
  </div>
);
