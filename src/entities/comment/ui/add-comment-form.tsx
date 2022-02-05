import { useEffect, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGate } from 'effector-react';
import { Avatar } from '@/entities/visitor';
import { Form, Button } from '@/shared/ui';
import * as model from '../model';
import { Error } from './error';

type Props = Readonly<{
  slug: string;
}>;

type FormFields = {
  body: string;
};

const defaultValues = {
  body: '',
};

export function AddCommentForm({ slug }: Props) {
  useGate(model.Gate, { slug });

  const { setFocus, handleSubmit, register, reset } = useForm<FormFields>({
    defaultValues,
  });

  useLayoutEffect(() => {
    setFocus('body');
  }, [setFocus]);

  useEffect(() =>
    model.addCommentFx.done.watch(() => {
      reset(defaultValues);
    }),
  );

  return (
    <>
      <Error />
      <Form
        className="card comment-form"
        onSubmit={handleSubmit(model.formSubmitted)}
      >
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
  );
}
