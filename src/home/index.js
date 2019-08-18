import React from 'react';
import { useStore } from 'effector-react';
import { Banner } from '../components';
import { Tags } from '../tags/tags';
import { $token } from '../auth/model';

export const Home = () => {
  const token = useStore($token);

  return (
    <div>
      {!token && <Banner />}
      <section className="container content">
        <main className="main" />
        <aside className="sidebar">
          <Tags />
        </aside>
      </section>
    </div>
  );
};
