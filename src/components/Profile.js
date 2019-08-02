import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as agent from '../agent';
import { ArticleList } from './ArticleList';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../constants/actionTypes';

const EditProfileSettings = ({ isUser }) => {
  return !isUser ? null : (
    <Link
      to="/settings"
      className="btn btn-sm btn-outline-secondary action-btn">
      <i className="ion-gear-a" />
      Edit Profile Settings
    </Link>
  );
};

const FollowUserButton = ({
  isUser,
  user: { following, username },
  unfollow,
  follow,
}) => {
  if (isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';
  if (following) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    if (following) {
      unfollow(username);
    } else {
      follow(username);
    }
  };

  return (
    <button type="button" className={classes} onClick={handleClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {following ? 'Unfollow' : 'Follow'}
      {username}
    </button>
  );
};

const mapStateToProps = (state) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) =>
    dispatch({
      type: FOLLOW_USER,
      payload: agent.profile.follow(username),
    }),
  onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: (username) =>
    dispatch({
      type: UNFOLLOW_USER,
      payload: agent.profile.unfollow(username),
    }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

class Profile extends React.Component {
  componentWillMount() {
    this.props.onLoad(
      Promise.all([
        agent.profile.get(this.props.match.params.username),
        agent.articles.byAuthor(this.props.match.params.username),
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
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}`}>
            My articles
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/@${this.props.profile.username}/favorites`}>
            Favorited articles
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const { profile } = this.props;
    if (!profile) {
      return null;
    }

    const isUser =
      this.props.currentUser &&
      this.props.profile.username === this.props.currentUser.username;

    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img
                  src={profile.image}
                  className="user-img"
                  alt={profile.username}
                />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>

                <EditProfileSettings isUser={isUser} />
                <FollowUserButton
                  isUser={isUser}
                  user={profile}
                  follow={this.props.onFollow}
                  unfollow={this.props.onUnfollow}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">{this.renderTabs()}</div>

              <ArticleList
                pager={this.props.pager}
                articles={this.props.articles}
                articlesCount={this.props.articlesCount}
                state={this.props.currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
export { Profile, mapStateToProps };
