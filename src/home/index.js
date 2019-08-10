import React from 'react';
import { Banner } from './banner';
import { Feed } from './feed';

export const Home = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <Feed />
        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
