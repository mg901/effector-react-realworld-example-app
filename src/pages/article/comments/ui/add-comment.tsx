// import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import { FormFooter } from './form-footer';

export const AddComment: React.FC = () => {
  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     comment: '',
  //   },
  // });

  return (
    <Form
      className="card comment-form"
      // onSubmit={handleSubmit((data) => {
      //   console.log('data');
      // })}
    >
      <div className="card-block">
        <Form.Control
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          {...register('comment')}
        />
      </div>
      <FormFooter />
    </Form>
  );
};
