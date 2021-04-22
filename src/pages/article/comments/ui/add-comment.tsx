import { useForm } from 'effector-forms';
import { Form as UIForm, Textarea } from 'ui';
import { form } from '../model';
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
        <Textarea
          placeholder="Write a comment..."
          rows={3}
          value={fields.comment.value}
          onChange={(e) => fields.comment.onChange(e.target.value)}
        />
      </div>
      <FormFooter />
    </UIForm>
  );
};
