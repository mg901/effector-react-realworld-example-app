import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { useStore, useGate } from 'effector-react';
import { Button } from 'ui';
import { routes } from '../library';
import { model } from '../model';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps<{ url: string }>>;

export const ProfilePage: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate, { url });
  const { image, username, bio } = useStore(model.$profile);
  const following = useStore(model.$following);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={image} alt={username} className="user-img" />
              <h4>{username}</h4>
              {bio && <p>{bio}</p>}
              <Button
                className="btn-sm action-btn btn-secondary"
                onClick={() => model.toggleFollowing()}>
                <i className="ion-plus-round" />
                &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ul className="nav nav-pills outline-active articles-toggle">
              <li className="nav-item">
                <NavLink exact to={`${url}`} className="nav-link">
                  My Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to={`${url}/favorites`} className="nav-link">
                  Favorited Articles
                </NavLink>
              </li>
            </ul>

            <div>{renderRoutes(routes)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
