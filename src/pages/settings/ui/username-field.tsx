import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const UsernameField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.username);

  return (
    <FormField
      className="form-control-lg"
      name={name}
      placeholder="Username"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
