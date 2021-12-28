import { useEffect } from 'react';
import { useForm as useReactHookForm, FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { AddTagForm } from './add-tag-form';
import { ButtonSubmit } from './button-submit';

export const EditorForm = () => {
  const { methods, handleSubmit, register } = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <Form id="editor" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              placeholder="Article Title"
              size="lg"
              {...register('title')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="What's this article about?"
              {...register('description')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Write your article (in markdown)"
              rows={8}
              {...register('body')}
            />
          </Form.Group>
        </Form>
        <AddTagForm />
      </FormProvider>
      <ButtonSubmit />
    </>
  );
};

function useForm() {
  useGate(model.Gate);
  const { slug } = useParams<{ slug: string }>();

  const methods = useReactHookForm<article.types.Article>({
    defaultValues: {
      slug: '',
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  });

  const { handleSubmit, register, reset } = methods;

  useEffect(() => {
    if (slug) {
      model.getArticleFx(slug);
    }

    const unwatch = model.getArticleFx.doneData.watch((x) => {
      reset(x);
    });

    return () => unwatch();
  }, [slug, reset]);

  return {
    handleSubmit: handleSubmit((values) => {
      if (slug) {
        model.updateArticleFx({ ...values, slug });
      } else {
        model.createArticleFx(values);
      }
    }),
    methods,
    register,
  };
}
