import React from 'react';
import { Link } from 'react-router-dom';
import * as css from './index.css';

type Props = {
  title: string;
};

export const Logo: React.FC<Props> = ({ title }) => (
  <Link to="/" className={`link ${css.logo}`}>
    {title.toLowerCase()}
  </Link>
);
