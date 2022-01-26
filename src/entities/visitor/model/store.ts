import { createEffect, createEvent, restore, guard } from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import { ACCESS_TOKEN } from '@/shared/config';
import * as http from '@/shared/http';
import * as api from './api';

export const logoutClicked = createEvent();
export const getVisitorFx = createEffect(api.getVisitor);

export const $visitor = restore(getVisitorFx.doneData, {
  bio: '',
  createdAt: '',
  email: '',
  id: null,
  image: '',
  token: null,
  updatedAt: '',
  username: '',
}).reset(logoutClicked);

export const $username = $visitor.map((visitor) => visitor.username);
export const $image = $visitor.map((visitor) => visitor.image);

export const $token = $visitor.map((visitor) => visitor.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $username,
  key: 'visitor-username',
});

persist({
  store: $image,
  key: 'visitor-image',
});

guard({
  source: $token,
  filter: Boolean,
}).watch(http.setToken);

persist({
  store: $token,
  key: ACCESS_TOKEN,
});

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useUsername: () => useStore($username),
  useImage: () => useStore($image),
  useVisitor: () => useStore($visitor),
};
