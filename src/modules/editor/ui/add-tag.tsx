import React from 'react';
import { useStore } from 'effector-react';
import { Form } from '../../../ui';
import { TagList } from './tag-list';
import { tagAdded, handleTextChanged } from '../events';
import { $currentTag } from '../model';
import { FormControl } from '../../../ui/form-control';

export const AddTag: React.FC = () => {
  const tag = useStore($currentTag);

  return (
    <>
      <Form
        onSubmit={(): void => {
          tagAdded(tag);
        }}>
        <FormControl
          name="tags"
          labelText="Tags"
          value={tag}
          onChange={handleTextChanged}
        />
      </Form>

      <TagList />
    </>
  );
};
