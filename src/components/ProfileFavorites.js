import React from 'react';
import { Link } from 'react-router-dom';
import * as agent from '../api';
import { Profile, mapStateToProps } from './Profile';

class ProfileFavorites extends Profile {
  componentWillMount() {
    this.props.onLoad(
      (page) =>
        agent.articles.favoritedBy(this.props.match.params.username, page),
      Promise.all([
        agent.profile.get(this.props.match.params.username),
        agent.articles.favoritedBy(this.props.match.params.username),
      ]),
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  renderTabs() {
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link className="nav-link" to={`/@${this.props.profile.username}`}>
            My articles
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}/favorites`}>
            Favorited articles
          </Link>
        </li>
      </ul>
    );
  }
}
