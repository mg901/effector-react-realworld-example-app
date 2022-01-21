import { useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { useGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import { Avatar } from '@/entities/visitor';
import { Form, Button } from '@/shared/ui';
import * as model from '../model';
import { Error } from './error';

type Props = Readonly<{
  slug: string;
}>;

export function AddCommentForm({ slug }: Props) {
  useGate(model.Gate, { slug });
  const { handleSubmit, register } = useForm();
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <>
      <Error />
      <Form className="card comment-form" onSubmit={handleSubmit}>
        <div className="card-block">
          <Form.Control
            as="textarea"
            placeholder="Write a comment..."
            rows={3}
            {...register('body')}
          />
        </div>
        <div className="card-footer">
          <Avatar className="comment-author-img" />
          <Button className="btn-primary" size="sm" type="submit">
            Post Comment
          </Button>
        </div>
      </Form>
    </>
  ) : null;
}

type FormInputs = {
  body: string;
};

const defaultValues = {
  body: '',
};

function useForm() {
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
      model.commentAdded(body);
    }),
  };
}
