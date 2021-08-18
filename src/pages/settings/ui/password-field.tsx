import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const PasswordField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.password);

  return (
    <FormField
      autoComplete="current-password"
      className="form-control-lg"
      name={name}
      placeholder="New Password"
      type="password"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
