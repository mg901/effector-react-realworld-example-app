import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { NavLink as Link } from 'react-router-dom';
import { useStore, useGate } from 'effector-react';
import { Button, NavLink } from 'ui';
import { routes } from '../library';
import { model } from '../model';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps<{ url: string }>>;

export const ProfilePage: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate, { url });
  const { image } = useStore(model.$profile);
  const following = useStore(model.$following);

  return (
    <div className="container">
      <div>
        <img src={image} alt="user-img" />
        <Button onClick={() => model.toggleFollowing()}>
          {following ? 'unfollow' : 'follow'}
        </Button>
      </div>
      <NavLink as={Link} to={`${url}`}>
        My Articles
      </NavLink>
      <NavLink as={Link} to={`${url}/favorites`}>
        Favorited Articles
      </NavLink>
      <div>{renderRoutes(routes)}</div>
    </div>
  );
};
