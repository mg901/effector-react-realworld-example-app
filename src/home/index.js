import React from 'react';

import { useStore } from 'effector-react';
import { Banner } from './banner';
import { Feed } from './feed';
import { $articles } from '../articles/model';

export const Home = () => {
  return (
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
};
