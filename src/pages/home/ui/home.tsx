import React from 'react';
import { Container } from '../../../ui';
import { Banner } from './banner';
import { Tabs } from './tabs';
import { TagList } from './tag-list';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
};

export const HomePage: React.FC<Props> = ({ children }) => (
  <>
    <Banner />
    <Container className={css.grid}>
      <main className={css.feed}>
        <Tabs />
        {children}
      </main>
      <aside className={css.sidebar}>
        <TagList />
      </aside>
    </Container>
  </>
);
