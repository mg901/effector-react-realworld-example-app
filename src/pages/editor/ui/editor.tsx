import React from 'react';
import { Container, Form, Button } from '../../../ui';
import { handleFieldChanged } from '../model';
import { AddTagForm } from './add-tag-form';
import { InputField } from './input-field';
import { TagList } from './tag-list';
import { TextField } from './text-field';

export const Editor: React.FC = () => (
  <Container>
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
  </Container>
);
