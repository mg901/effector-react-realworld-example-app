import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as visitor from 'entities/visitor';
import { useParams } from 'shared/library/router';
import { Button, Form } from 'shared/ui';
import { model } from '../model';

type FormData = {
  body: string;
};

const defaultValues = {
  body: '',
};

export function AddCommentForm(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const { handleSubmit, register, reset } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit = ({ body }: FormData) => {
    model.addCommentFx({ body, slug });
  };

  useEffect(() => {
    const unwatch = model.addCommentFx.done.watch(() => {
      reset(defaultValues);
    });

    return () => unwatch();
  });

  return (
    <Form className="card comment-form" onSubmit={handleSubmit(onSubmit)}>
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

export function Footer(): JSX.Element {
  const { image, username } = visitor.selectors.useVisitor();

  return (
    <div className="card-footer">
      <img alt={username} className="comment-author-img" src={image} />
      <Button className="btn-primary" size="sm" type="submit">
        Post Comment
      </Button>
    </div>
  );
}
