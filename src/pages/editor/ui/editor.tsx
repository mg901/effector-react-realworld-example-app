import React from 'react';
import { Form, Button } from '../../../ui';
import { InputField } from './input-field';
import { TextField } from './text-field';
import { AddTagForm } from './add-tag-form';
import { TagList } from './tag-list';
import { handleFieldChanged } from '../model';
import '../init';

export const EditorPage: React.FC = () => (
  <>
    <Form
      id="editor"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <h1>Editor</h1>
      <InputField
        name="title"
        placeholder="Article Title"
        onChange={handleFieldChanged}
      />
      <InputField
        name="description"
        placeholder="What's this article about?"
        onChange={handleFieldChanged}
      />
      <TextField
        name="body"
        placeholder="Write your article (in markdown)"
        onChange={handleFieldChanged}
      />
    </Form>
    <AddTagForm />
    <TagList />

    <Button type="submit" form="editor">
      Publish article
    </Button>
  </>
);
