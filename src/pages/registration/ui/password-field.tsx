import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const PasswordField: React.FC = () => {
  const { name, onChange } = useField(model.form.fields.password);

  return (
    <FormField
      autoComplete="current-password"
      className="form-control-lg"
      name={name}
      placeholder="Password"
      type="password"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
