import React from 'react';
import { useStore } from 'effector-react';
import { $appName } from '../models/app.model';

export const Banner = () => {
  const appName = useStore($appName).toLowerCase();

  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};
