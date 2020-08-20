import React from 'react';
import { Banner } from '../banner';
import { Container } from '../../../../ui';
import { Tabs } from '../tabs';
import { Routes } from '../routes';
import { TagList } from '../tag-list';
import * as css from './index.css';

export const Home: React.FC = () => (
  <>
    <Banner />
    <Container className={css.grid}>
      <main className={css.feed}>
        <Tabs />
        <Routes />
      </main>
      <aside className={css.sidebar}>
        <TagList />
      </aside>
    </Container>
  </>
);
