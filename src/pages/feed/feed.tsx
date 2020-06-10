import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const FeedPage: React.FC<Props> = ({ children }) => (
  <main className="feed">{children}</main>
);
