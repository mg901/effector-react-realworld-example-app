import { Urls, AuthCosumer } from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

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
