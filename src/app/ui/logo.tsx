import { Paths } from 'library/router';
import { Link } from 'react-router-dom';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link className="navbar-brand" to={Paths.ROOT}>
    {title.toLowerCase()}
  </Link>
);
