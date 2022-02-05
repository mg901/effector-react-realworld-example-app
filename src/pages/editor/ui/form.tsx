import { useEffect, useLayoutEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { AddTagForm } from './add-tag-form';
import { ButtonSubmit } from './button-submit';

export const EditorForm = () => {
  useGate(model.Gate);
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
    return model.getArticleFx.doneData.watch((values) => {
      methods.reset(values);
    });
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <Form id="editor" onSubmit={methods.handleSubmit(model.formSubmitted)}>
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
      <ButtonSubmit />
    </FormProvider>
  );
};
