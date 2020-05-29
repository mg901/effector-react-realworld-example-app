import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => (
  <div className="container">{children}</div>
);
