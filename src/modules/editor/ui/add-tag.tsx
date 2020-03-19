import React from 'react';
import { useStore } from 'effector-react';
import { Form, InputField } from '../../../ui';
import { TagList } from './tag-list';
import { tagAdded, handleTextChanged } from '../events';
import { $currentTag } from '../model';

export const AddTag: React.FC = () => {
  const tag = useStore($currentTag);

  return (
    <>
      <Form
        onSubmit={(): void => {
          tagAdded(tag);
        }}>
        <InputField value={tag} onChange={handleTextChanged} />
      </Form>

      <TagList />
    </>
  );
};
