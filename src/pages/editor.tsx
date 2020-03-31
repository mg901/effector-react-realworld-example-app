import React from 'react';
import { useStore } from 'effector-react';
import { FormField, AddTag, Submit, $errors } from '../modules/editor';
import { Form, ErrorList } from '../ui';

export const Editor: React.FC = () => {
  const errors = useStore($errors);

  return (
    <div className="container">
      <ErrorList errors={errors} />
      <Form id="editor">
        <FormField name="title" labelText="Title" placeholder="Article Title" />
        <FormField
          name="description"
          labelText="Description"
          placeholder="What's this article about?"
        />
        <FormField
          as="textarea"
          name="body"
          rows={8}
          labelText="Text"
          placeholder="Write your article (in markdown)"
        />
      </Form>
      <AddTag />
      <Submit />
    </div>
  );
};
