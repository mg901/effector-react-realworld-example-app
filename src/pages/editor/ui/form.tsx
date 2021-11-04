import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useGate } from 'effector-react';
import * as article from 'entities/article';
import { useParams } from 'shared/library/router';
import { Form } from 'shared/ui';
import { model } from '../model';
import { AddTagForm } from './add-tag-form';
import { ButtonSubmit } from './button-submit';

export const EditorForm: React.FC = () => {
  useGate(model.Gate);
  const { slug } = useParams<{ slug: string }>();

  const methods = useForm<article.types.Article>({
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

  return (
    <>
      <FormProvider {...methods}>
        <Form id="editor" onSubmit={handleSubmit(model.createArticleFx)}>
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
