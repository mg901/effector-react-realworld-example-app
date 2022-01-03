import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/router';

type Props = Readonly<{
  title: string;
}>;

export const Logo = ({ title }: Props) => (
  <Link className="navbar-brand" to={ROUTES.root}>
    {title.toLowerCase()}
  </Link>
);
