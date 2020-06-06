import { $token, $authorizedUser, loggedOutClicked } from './model';

$token.catch(console.error).on($authorizedUser, (_, user) => user.token);

$authorizedUser.reset(loggedOutClicked);
