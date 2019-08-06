import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';

import {
  $password,
  $user,
  asyncUpdateUserData,
  onCahangeImageUrl,
  onChangeName,
  onChangeBio,
  onChangeEmail,
  onChangePassword,
} from '../models/user.model';

export const Form = () => {
  const user = useStore($user);
  const password = useStore($password);
  const isLoading = useStore(asyncUpdateUserData.pending);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        asyncUpdateUserData(user);
      }}>
      <fieldset>
        <InputFiled
          placeholder="URL of profile picture"
          value={user.image}
          onChange={onCahangeImageUrl}
        />

        <InputFiled
          placeholder="Username"
          value={user.username}
          onChange={onChangeName}
        />

        <TextField
          value={user.bio}
          placeholder="Short bio about you"
          onChange={onChangeBio}
        />

        <InputFiled
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={onChangeEmail}
        />

        <InputFiled
          type="password"
          placeholder="New Password"
          value={password}
          onChange={onChangePassword}
        />

        <Button
          type="submit"
          className="btn-lg btn-primary pull-xs-right"
          disabled={isLoading}>
          Update Settings
        </Button>
      </fieldset>
    </form>
  );
};
