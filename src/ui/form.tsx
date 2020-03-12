import React from 'react';
import { Event } from 'effector';

type Props = Readonly<{
  onSubmit: Event<void>;
  children: React.ReactNode;
}>;

export const Form: React.FC<Props> = ({ children, onSubmit }) => (
  <form
    onSubmit={(e): void => {
      e.preventDefault();
      onSubmit();
    }}>
    {children}
  </form>
);
