import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { form } from '../model/model';

export const TitleField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.title);

  return (
    <FormField
      className="form-control-lg"
      name={name}
      placeholder="Article Title"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
