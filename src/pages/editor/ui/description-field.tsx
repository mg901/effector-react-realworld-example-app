import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const DescriptionField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.description);

  return (
    <FormField
      name={name}
      placeholder="What's this article about?"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
