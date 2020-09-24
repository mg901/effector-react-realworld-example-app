import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const ArticlesList: React.FC<Props> = ({ children }) => (
  <ul className="list-unstyled">{children}</ul>
);
