import { useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import * as visitor from '@/entities/visitor';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { Footer } from './footer';

type Props = Readonly<{
  slug: string;
}>;

export function AddCommentForm({ slug }: Props) {
  const { handleSubmit, register } = useForm(slug);
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
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
  ) : null;
}

type FormInputs = {
  body: string;
};

const defaultValues = {
  body: '',
};

function useForm(slug: string) {
  const { handleSubmit, register, reset } = useReactHookForm<FormInputs>({
    defaultValues,
  });

  useEffect(() =>
    model.addCommentFx.done.watch(() => {
      reset(defaultValues);
    }),
  );

  return {
    register,
    handleSubmit: handleSubmit(({ body }: FormInputs) => {
      model.commentAdded({ body, slug });
    }),
  };
}
