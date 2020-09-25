import { $authorizedUser, loggedOutClicked, $token } from './model';

$authorizedUser.reset(loggedOutClicked);
$token.catch(console.error).on($authorizedUser, (_, { token }) => token);
