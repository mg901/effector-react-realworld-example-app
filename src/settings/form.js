import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';

import { $currentUser, updateUserData, onChangeText } from '../models/user';

export const Form = () => {
  const user = useStore($currentUser);
  const isLoading = useStore(updateUserData.pending);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateUserData(user);
      }}>
      <fieldset>
        <InputFiled
          placeholder="URL of profile picture"
          value={user.image}
          onChange={onChangeText('image')}
        />

        <InputFiled
          placeholder="Username"
          value={user.username}
          onChange={onChangeText('username')}
        />

        <TextField
          value={user.bio}
          placeholder="Short bio about you"
          onChange={onChangeText('bio')}
        />

        <InputFiled
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={onChangeText('email')}
        />

        <InputFiled
          type="password"
          placeholder="New Password"
          value={user.password}
          onChange={onChangeText('password')}
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
