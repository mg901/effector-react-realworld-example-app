import React from 'react';
import { Link } from 'react-router-dom';

export const EditSettings = () => (
  <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
    <i className="ion-gear-a" /> Edit Profile Settings
  </Link>
);
