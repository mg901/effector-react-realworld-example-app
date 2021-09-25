import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import * as model from '../model/model';
import { FormFooter } from './form-footer';

export const AddComment: React.FC = ({ slug }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      body: '',
    },
  });

  return (
    <Form
      className="card comment-form"
      onSubmit={handleSubmit((body) => {
        model.commentAdded({ body, slug });
      })}
    >
      <div className="card-block">
        <Form.Control
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          {...register('body')}
        />
      </div>
      <FormFooter />
    </Form>
  );
};
