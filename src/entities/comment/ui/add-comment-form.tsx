import { useEffect, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from '@/shared/ui';
import { Avatar } from '@/entities/session';
import * as comments from '../model';
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
  useLayoutEffect(() => {
    comments.store.attachSlug(slug);
  }, [slug]);

  const { setFocus, handleSubmit, register, reset } = useForm<FormFields>({
    defaultValues,
  });

  useEffect(() => {
    setFocus('body');
  }, [setFocus]);

  useEffect(() =>
    comments.store.addCommentFx.done.watch(() => {
      reset(defaultValues);
    }),
  );

  return (
    <>
      <Error />
      <Form
        className="card comment-form"
        onSubmit={handleSubmit(comments.store.submitForm)}
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
