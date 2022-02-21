import { forwardRef } from 'react';
import { Form } from '@/shared/ui';

export const EmailField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Form.Control
    name="email"
    placeholder="Email"
    ref={ref}
    size="lg"
    type="email"
  />
));
