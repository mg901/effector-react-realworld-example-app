import React from 'react';
import { Event } from 'effector';
import './index.css';

type Callback = () => void;

type Props = Readonly<{
  children: React.ReactNode;
  id?: string;
  onSubmit?: Callback | Event<void>;
}>;

export const Form: React.FC<Props> = ({ children, id, onSubmit }) => (
  <form
    id={id}
    className="form"
    onSubmit={(e): void => {
      e.preventDefault();
      if (onSubmit) onSubmit();
    }}>
    {children}
  </form>
);
