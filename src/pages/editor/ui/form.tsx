import { useEffect, useLayoutEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form, Button } from '@/shared/ui';
import * as article from '@/entities/foo';
import * as model from '../model';
import { AddTagForm } from './add-tag-form';

export const EditorForm = () => {
  const methods = useForm<article.types.Article>({
    defaultValues: {
      slug: '',
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  });

  useLayoutEffect(() => {
    methods.setFocus('title');
  }, [methods]);

  useEffect(() => {
    return article.store.getArticleFx.doneData.watch((data) => {
      methods.reset(data);
    });
  }, [methods]);

  return (
    <>
      <FormProvider {...methods}>
        <Form id="editor" onSubmit={methods.handleSubmit(model.submitForm)}>
          <Form.Group>
            <Form.Control
              placeholder="Article Title"
              size="lg"
              {...methods.register('title')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="What's this article about?"
              {...methods.register('description')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Write your article (in markdown)"
              rows={8}
              {...methods.register('body')}
            />
          </Form.Group>
        </Form>
        <AddTagForm />
      </FormProvider>
      <ButtonSubmit />
    </>
  );
};

export function ButtonSubmit() {
  const disabled = article.selectors.useCreateArticleLoading();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      form="editor"
      size="lg"
      type="submit"
    >
      Publish article
    </Button>
  );
}
