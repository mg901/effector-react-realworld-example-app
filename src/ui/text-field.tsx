import React from 'react';
import { FormGroup, Textarea, TextareaProps } from 'ui';

export const TextField: React.FC<TextareaProps> = (props) => (
  <FormGroup>
    <Textarea {...props} />
  </FormGroup>
);
