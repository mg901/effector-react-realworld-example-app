import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $selectedTag } from '../tags/model';

export const FeedByTagsLink = ({ url }) => {
  const tag = useStore($selectedTag);

  return (
    tag && (
      <NavLink to={`${url}/tags/${tag}`} className="nav-link">
        #{tag}
      </NavLink>
    )
  );
};
