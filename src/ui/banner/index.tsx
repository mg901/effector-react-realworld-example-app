import React from 'react';
import { APP_NAME } from '../../constants';
import './index.css';

type Props = {
  token: string | null;
};
export const Banner: React.FC<Props> = ({ token }) => (!token ? (
  <div className="container banner">
    <h1 className="logo banner-title">{APP_NAME.toLowerCase()}</h1>
    <p>A place to share your knowledge.</p>
  </div>
) : null);
