import React from 'react';
import { FormGroup, Input, InputProps } from 'ui';

export const InputField: React.FC<InputProps> = (props) => (
  <FormGroup>
    <Input {...props} />
  </FormGroup>
);
