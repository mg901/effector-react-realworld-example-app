import React from 'react';
import { Page, Row } from '../../../ui';
import { Sidebar } from '../modules/sidebar';
import { Banner } from './banner';
import { Routes } from './routes';
import { Tabs } from './tabs';

export const HomePage: React.FC = () => (
  <div className="home-page">
    <Banner />
    <Page>
      <Row>
        <main className="col-md-9">
          <Tabs />
          <Routes />
        </main>

        <div className="col-md-3">
          <Sidebar />
        </div>
      </Row>
    </Page>
  </div>
);
