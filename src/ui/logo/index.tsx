import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

type Props = {
  title: string;
};

export const Logo: React.FC<Props> = ({ title }) => (
  <Link to="/" className="link logo header__logo">
    {title.toLowerCase()}
  </Link>
);
