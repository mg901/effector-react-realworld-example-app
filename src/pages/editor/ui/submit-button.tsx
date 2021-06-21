import { useForm } from 'effector-forms';
import { Button } from 'shared/ui';
import { model, selectors } from '../model';

export const SubmitButton: React.FC = () => {
  const { submit } = useForm(model.form);
  const disabled = selectors.useCreateArticle();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      form="editor"
      type="submit"
      onClick={handleSubmit}>
      Publish article
    </Button>
  );
};
