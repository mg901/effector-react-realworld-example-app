import React from 'react';
import { Banner } from './banner';
import { Routes } from './routes';
import { Tabs } from './tabs';
import { TagList } from './tag-list';

export const HomePage: React.FC = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <main className="col-md-9">
          <Tabs />
          <Routes />
        </main>

        <div className="col-md-3">
          <aside className="sidebar">
            <p>Popular Tags</p>
            <TagList />
          </aside>
        </div>
      </div>
    </div>
  </div>
);
