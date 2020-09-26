import React from 'react';
import { useStore } from 'effector-react';
import { Form, Input } from 'ui';
import { $currentTag, tagAdded, handleTextChanged } from '../model';
import '../model/init';

export const AddTagForm: React.FC = () => {
  const tag = useStore($currentTag);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        autoComplete="off"
        value={tag}
        name="tagList"
        placeholder="Enter tags"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            tagAdded(tag);
          }
        }}
        onChange={handleTextChanged}
      />
    </Form>
  );
};
