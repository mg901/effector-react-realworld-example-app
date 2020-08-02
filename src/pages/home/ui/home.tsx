import React from 'react';
import { HomeRoutes } from '../../../router';
import { Container } from '../../../ui';
import { Banner } from './banner';
import { Tabs } from './tabs';
import { TagList } from './tag-list';
import * as css from './index.css';

export const Home: React.FC = () => (
  <>
    <Banner />
    <Container className={css.grid}>
      <main className={css.feed}>
        <Tabs />
        <HomeRoutes />
      </main>

      <aside className={css.sidebar}>
        <TagList />
      </aside>
    </Container>
  </>
);
