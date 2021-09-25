// import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import { Footer } from './footer';

export const CreateComment: React.FC = () => {
  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     body: '',
  //   },
  // });

  return (
    <Form className="card comment-form">
      <div className="card-block">
        <Form.Control
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          // {...register('body')}
        />
      </div>
      <Footer />
    </Form>
  );
};
