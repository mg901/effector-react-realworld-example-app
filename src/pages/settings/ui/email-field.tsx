import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const EmailField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.email);

  return (
    <FormField
      className="form-control-lg"
      name={name}
      placeholder="Email"
      type="email"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
