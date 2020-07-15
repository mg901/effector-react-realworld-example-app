import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../../../ui';
import { Links } from '../../../../router';
import * as css from './index.css';

type Props = {
  title: string;
};

export const Logo: React.FC<Props> = ({ title }) => (
  <Link as={RouterLink} to={Links.ROOT} className={css.logo}>
    {title.toLowerCase()}
  </Link>
);
