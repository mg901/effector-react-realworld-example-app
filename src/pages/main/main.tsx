import React from 'react';
import { useStore } from 'effector-react';
import { $token, Tags, GlobalFeed } from '../../modules';
import { Banner } from '../../ui';

export const Main: React.FC = () => {
  const token = useStore($token);

  return (
    <div>
      <Banner token={token} />
      <section className="container content">
        <main className="main">
          <GlobalFeed />
        </main>
        <aside className="sidebar">
          <Tags />
        </aside>
      </section>
    </div>
  );
};
