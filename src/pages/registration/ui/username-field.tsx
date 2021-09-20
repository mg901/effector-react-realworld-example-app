import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const UsernameField: React.FC = () => {
  const { name, onChange } = useField(model.form.fields.username);

  return (
    <FormField
      className="form-control-lg"
      name={name}
      placeholder="Username"
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
