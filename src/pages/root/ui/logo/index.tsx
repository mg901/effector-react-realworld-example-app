import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Paths } from '../../../../library/router';
import { Link } from '../../../../ui';
import * as css from './index.css';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link as={RouterLink} to={Paths.ROOT} className={css.logo}>
    {title.toLowerCase()}
  </Link>
);
