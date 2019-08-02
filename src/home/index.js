import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Banner } from './banner';
import MainView from './main-view';
import { Tags } from './tags';
import * as agent from '../agent';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from '../constants/actionTypes';

import { getAsyncTags } from './store';

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home = ({ token, onLoad, onUnload, appName, tags, onClickTag }) => {
  useEffect(() => {
    const tab = token ? 'feed' : 'all';
    const articlesPromise = token ? agent.articles.feed : agent.articles.all;

    getAsyncTags();

    Promise.all([agent.tags.getAll(), articlesPromise()]);

    onLoad(
      tab,
      articlesPromise,
      Promise.all([agent.tags.getAll(), articlesPromise()]),
    );

    return () => {
      onUnload();
    };
  }, []);

  return (
    <div className="home-page">
      <Banner token={token} appName={appName} />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <Tags tags={tags} onClickTag={onClickTag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
