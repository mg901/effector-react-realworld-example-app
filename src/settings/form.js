import React from 'react';
import { Input, Textarea } from './form-fields';
import { InputField } from '../components';
import { Submit } from '../submit';

import { submitForm, changePassword } from './model';

export const Form = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      submitForm();
    }}>
    <fieldset>
      <Input name="image" placeholder="URL of profile picture" />

      <Input name="username" placeholder="Username" />

      <Textarea name="bio" placeholder="Short bio about you" />

      <Input type="email" name="email" placeholder="Email" />

      <InputField
        type="password"
        name="password"
        placeholder="New Password"
        onChange={(e) => changePassword(e.currentTarget.value)}
      />

      <Submit value="Update Settings" />
    </fieldset>
  </form>
);
