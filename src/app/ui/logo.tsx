import { Link } from 'react-router-dom';
import { URLS } from 'router';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link className="navbar-brand" to={URLS.ROOT}>
    {title.toLowerCase()}
  </Link>
);
