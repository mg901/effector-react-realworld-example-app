import React from 'react';
import { useStore } from 'effector-react';
import { Form, Input } from 'ui';
import * as model from './model';

import './init';

export const AddTag: React.FC = () => {
  const tag = useStore(model.$currentTag);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        autoComplete="off"
        value={tag}
        name="tagList"
        placeholder="Enter tags"
        onKeyDown={model.keyPressed}
        onChange={model.handleTextChanged}
      />
    </Form>
  );
};
