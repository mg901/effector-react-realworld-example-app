import React from 'react';
import { useStore } from 'effector-react';
import { Form, Input } from '../../../ui';

import { $currentTag, tagAdded, handleTextChanged } from '../model';

export const AddTagForm: React.FC = () => {
  const tag = useStore($currentTag);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <Input
        value={tag}
        name="tagList"
        placeholder="Enter tags"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.which === 13) {
            tagAdded(tag);
          }
        }}
        onChange={handleTextChanged}
      />
    </Form>
  );
};
