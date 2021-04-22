import { Link } from 'react-router-dom';
import { Urls } from 'router';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link className="navbar-brand" to={Urls.ROOT}>
    {title.toLowerCase()}
  </Link>
);
