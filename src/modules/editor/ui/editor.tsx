import React from 'react';
import { useStore } from 'effector-react';
import { FormField } from './form-field';
import { Form, ErrorList } from '../../../ui';
import { AddTag } from './add-tag';
import { Submit } from './submit';
import { $errors } from '../model';

export const Editor: React.FC = () => {
  const errors = useStore($errors);

  return (
    <>
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
    </>
  );
};
