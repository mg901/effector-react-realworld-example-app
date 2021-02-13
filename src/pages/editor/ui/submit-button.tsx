import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import * as model from '../model';

export const SubmitButton: React.FC = () => {
  const { submit } = useForm(model.form);
  const disabled = useStore(model.createArticleFx.pending);
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
