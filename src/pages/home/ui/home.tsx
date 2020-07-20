import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { HomeRoutes } from '../../../router';
import { Container } from '../../../ui';
import { Banner } from './banner';
import { Tabs } from './tabs';
import { TagList } from './tag-list';
import * as css from './index.css';

export const HomePage: React.FC<RouteConfigComponentProps> = ({ route }) => (
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
