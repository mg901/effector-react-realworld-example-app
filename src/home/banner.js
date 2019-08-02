import React from 'react';

export const Banner = ({ appName, token }) =>
  token  && (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
