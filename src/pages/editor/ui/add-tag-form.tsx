import React from 'react';
import { useStore } from 'effector-react';
import { Form, Input } from 'ui';
import { model } from '../model';

export const AddTagForm: React.FC = () => {
  const tag = useStore(model.$currentTag);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <Input
        autoComplete="off"
        value={tag}
        name="tagList"
        placeholder="Enter tags"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            model.tagAdded(tag);
          }
        }}
        onChange={model.handleTextChanged}
      />
    </Form>
  );
};
