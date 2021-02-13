import { useForm } from 'effector-forms';
import { Form, Input } from 'ui';
import * as model from './model';

export const AddTag: React.FC = () => {
  const { fields } = useForm(model.form);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        autoComplete="off"
        name="tag-list"
        placeholder="Enter tags"
        value={fields.currentTag.value}
        onChange={(e) => fields.currentTag.onChange(e.target.value)}
        onKeyDown={model.keyPressed}
      />
    </Form>
  );
};
