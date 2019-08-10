import React from 'react';
import { useStore } from 'effector-react';
import { $articles } from '../articles/model';

export const Feed = () => {
  const acticles = useStore($articles);

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active" />
      </div>
    </div>
  );
};
