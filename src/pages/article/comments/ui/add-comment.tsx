import { useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Form } from 'shared/ui';
import * as model from '../model';
import { Footer } from './footer';

export function AddCommentForm(): JSX.Element {
  const { handleSubmit, register } = useForm();

  return (
    <Form className="card comment-form" onSubmit={handleSubmit}>
      <div className="card-block">
        <Form.Control
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          {...register('body')}
        />
      </div>
      <Footer />
    </Form>
  );
}

type FormValues = {
  body: string;
};

function useForm() {
  const defaultValues = {
    body: '',
  };

  const { slug } = useParams<{ slug: string }>();
  const { handleSubmit, register, reset } = useReactHookForm<FormValues>({
    defaultValues,
  });

  const onSubmit = ({ body }: FormValues) => {
    model.addCommentFx({ body, slug });
  };

  useEffect(() => {
    const unwatch = model.addCommentFx.done.watch(() => {
      reset(defaultValues);
    });

    return () => unwatch();
  });

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}
