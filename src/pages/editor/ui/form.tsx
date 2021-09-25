import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as article from 'entities/article';
import { Form } from 'shared/ui';
import { model } from '../model';
import { AddTagForm } from './add-tag-form';
import { ButtonSubmit } from './button-submit';

export const EditorForm: React.FC = () => {
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

  useEffect(() => {
    if (slug) {
      model.getArticleFx(slug);
    }

    const unwatch = model.getArticleFx.doneData.watch((x) => {
      methods.reset(x);
    });

    return () => unwatch();
  }, [slug, methods]);

  return (
    <>
      <FormProvider {...methods}>
        <Form
          id="editor"
          onSubmit={methods.handleSubmit(model.createArticleFx)}
        >
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
