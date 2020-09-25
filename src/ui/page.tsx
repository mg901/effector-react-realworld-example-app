import React from 'react';
import { Container } from './container';

export const Page: React.FC = ({ children }) => (
  <Container className="page">{children}</Container>
);
