import { Link } from 'react-router-dom';
import { URLS } from '@/shared/router';

type Props = Readonly<{
  title: string;
}>;

export const Logo = ({ title }: Props) => (
  <Link className="navbar-brand" to={URLS.ROOT}>
    {title.toLowerCase()}
  </Link>
);
