import React from 'react';
import { useStore } from 'effector-react';
import { Textarea } from 'ui';
import { model } from '../model';

export const AddComment: React.FC = () => {
  const value = useStore(model.$commentText);

  return <Textarea rows={3} value={value} onChange={model.handleTextChanged} />;
};
