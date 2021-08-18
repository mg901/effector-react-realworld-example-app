import { useForm } from 'effector-forms';
import { Form, FormControl } from 'shared/ui';
import * as model from './model';

export const AddTag: React.FC = () => {
  const { fields } = useForm(model.form);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormControl
        autoComplete="off"
        name="tag-list"
        placeholder="Enter tags"
        value={fields.currentTag.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          fields.currentTag.onChange(e.target.value)
        }
        onKeyDown={model.keyPressed}
      />
    </Form>
  );
};
