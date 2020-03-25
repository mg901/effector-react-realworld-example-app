import React from 'react';
import { useStore } from 'effector-react';
import { Input } from './input';
import { Textarea } from './textarea';
import { Form, Button } from '../../../ui';
import { AddTag } from './add-tag';
import { articleCreated } from '../events';
import { fxCreateArticle } from '../effects';

export const Editor: React.FC = () => {
  const loading = useStore(fxCreateArticle.pending);

  return (
    <>
      <Form id="editor">
        <fieldset>
          <Input name="title" placeholder="Article Title" />
          <Input name="description" placeholder="What's this article about?" />
          <Textarea
            name="body"
            placeholder="Write your article (in markdown)"
          />
        </fieldset>
      </Form>
      <AddTag />
      <Button disabled={loading} form="editor" onClick={articleCreated}>
        Publish Article
      </Button>
    </>
  );
};
