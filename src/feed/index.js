import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { PrivateRoute } from '../router/private-route';
import { UserFeedLink } from './user-feed-link';
import { UserFeed } from './user-feed';
import { GlobalFeed } from './global-feed';
import { FeedByTag } from './feed-by-tag';

export const Feed = ({ match: { url, path } }) => {
  return (
    <div className="feed">
      <h1>Feed</h1>
      <nav className="nav">
        <UserFeedLink url={url} />
        <NavLink to={`${url}/global`} className="nav-link">
          global feed
        </NavLink>
        <NavLink to={`${url}/tags/:tag`} className="nav-link">
          tag
        </NavLink>
      </nav>

      <Switch>
        <PrivateRoute exact path={`${path}/user`} component={UserFeed} />
        <Route exact path={`${path}/global`} component={GlobalFeed} />
        <Route exact path={`${path}/tags/:tag`} component={FeedByTag} />
      </Switch>
    </div>
  );
};
