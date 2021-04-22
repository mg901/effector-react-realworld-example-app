import { Urls, AuthCosumer } from 'router';
import { NavItem, NavLink } from 'ui';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink: React.FC<Props> = ({ url }) => {
  return (
    <AuthCosumer>
      {({ isAuth }) =>
        isAuth ? (
          <NavItem>
            <NavLink to={`${url}${Urls.YOUR_FEED}`}>Your Feed</NavLink>
          </NavItem>
        ) : null
      }
    </AuthCosumer>
  );
};
