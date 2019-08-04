import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Banner } from './banner';
import MainView from './main-view';

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          {/* <MainView /> */}
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              {/* <Tags tags={tags} onClickTag={onClickTag} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
