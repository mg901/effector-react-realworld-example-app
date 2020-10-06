import { $user, $token, loggedOutClicked } from '.';

$user.reset(loggedOutClicked);
$token.catch(console.error).on($user, (_, { token }) => token);
