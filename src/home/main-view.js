import React from 'react';
import { connect } from 'react-redux';
import { ArticleList } from '../components/ArticleList';
import * as agent from '../api';
import { CHANGE_TAB } from '../constants/actionTypes';

const handleClick = (handler) => (e) => {
  e.preventDefault();
  handler('feed', agent.articles.feed, agent.articles.feed());
};

const YourFeedTab = ({ token, onTabClick, tab }) =>
  token && (
    <li className="nav-item">
      <button
        type="button"
        className={tab === 'feed' ? 'nav-link active' : 'nav-link'}
        onClick={handleClick(onTabClick)}>
        Your Feed
      </button>
    </li>
  );

const GlobalFeedTab = ({ onTabClick, tab }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onTabClick('all', agent.articles.all, agent.articles.all());
  };

  return (
    <li className="nav-item">
      <button
        type="button"
        className={tab === 'all' ? 'nav-link active' : 'nav-link'}
        onClick={clickHandler}>
        Global Feed
      </button>
    </li>
  );
};

const TagFilterTab = ({ tag }) =>
  !tag ? null : (
    <li className="nav-item">
      <button type="button" className="nav-link active">
        <i className="ion-pound" />
        {tag}
      </button>
    </li>
  );

const mapStateToProps = (state) => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({
      type: CHANGE_TAB,
      tab,
      pager,
      payload,
    }),
});

const MainView = (props) => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <YourFeedTab
          token={props.token}
          tab={props.tab}
          onTabClick={props.onTabClick}
        />

        <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

        <TagFilterTab tag={props.tag} />
      </ul>
    </div>

    <ArticleList
      pager={props.pager}
      articles={props.articles}
      loading={props.loading}
      articlesCount={props.articlesCount}
      currentPage={props.currentPage}
    />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView);
