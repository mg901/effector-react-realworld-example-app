import React from 'react';
import { useStore } from 'effector-react';
import { $articles, $isLoading } from '../models/articles';

const Articles = () => {
  const { articles } = useStore($articles);

  return (
    <ul className="nav nav-pills outline-active">
      {articles.map(({ slug, title }) => (
        <li key={slug}>{title}</li>
      ))}
    </ul>
  );
};

export const Feed = () => {
  const isLoading = useStore($isLoading);

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        {isLoading ? <h1>loading ...</h1> : <Articles />}
      </div>
    </div>
  );
};
