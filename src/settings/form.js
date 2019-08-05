import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { SubmitBtn } from '../components/submit-btn';

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

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows="8"
            placeholder="Short bio about you"
            value={user.bio}
            onChange={onChangeBio}
          />
        </fieldset>

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

        <SubmitBtn disabled={isLoading}>Update Settings</SubmitBtn>
      </fieldset>
    </form>
  );
};
