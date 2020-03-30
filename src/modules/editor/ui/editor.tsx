import React from 'react';
import { useStore } from 'effector-react';
import { FormField } from './form-field';
import { Form, Button } from '../../../ui';
import { AddTag } from './add-tag';
import { articleCreated } from '../events';
import { fxCreateArticle } from '../effects';

export const Editor: React.FC = () => {
  const loading = useStore(fxCreateArticle.pending);

  return (
    <>
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
      <Button disabled={loading} form="editor" onClick={articleCreated}>
        Publish Article
      </Button>
    </>
  );
};
