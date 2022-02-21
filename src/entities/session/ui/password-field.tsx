import { Form } from '@/shared/ui';

export const PasswordField = () => (
  <Form.Control
    autoComplete="new-password"
    name="password"
    placeholder="Password"
    size="lg"
    type="password"
  />
);
