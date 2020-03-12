import React from 'react';
import { useStore } from 'effector-react';
import { $token, Tags } from '../modules';
import { Banner } from '../ui';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Main: React.FC<Props> = ({ children }) => {
  const token = useStore($token);

  return (
    <div>
      <Banner token={token} />
      <section className="container content">
        <main className="main">{children}</main>
        <aside className="sidebar">
          <Tags />
        </aside>
      </section>
    </div>
  );
};
