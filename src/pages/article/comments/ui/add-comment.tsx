import { useForm } from 'effector-forms';
import { Form as UIForm, FormControl } from 'shared/ui';
import { form } from '../model/model';
import { FormFooter } from './form-footer';

export const AddComment: React.FC = () => {
  const { submit, fields } = useForm(form);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  return (
    <UIForm className="card comment-form" onSubmit={handleSubmit}>
      <div className="card-block">
        <FormControl
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          value={fields.comment.value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            fields.comment.onChange(e.target.value)
          }
        />
      </div>
      <FormFooter />
    </UIForm>
  );
};
