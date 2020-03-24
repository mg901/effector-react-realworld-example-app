import React from 'react';
import './index.css';

type Props = Readonly<{
  children: React.ReactNode;
  id?: string;
  onSubmit?: Function;
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
