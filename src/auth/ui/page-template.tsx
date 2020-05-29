import React from 'react';
import { useStore } from 'effector-react';
import { Container, ErrorList } from '../../ui';
import { $responseFail } from '../state';

type Props = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

export const PageTemplate: React.FC<Props> = ({ title, children }) => {
  const errors = useStore($responseFail);

  return (
    <Container>
      <h1>{title}</h1>
      <ErrorList errors={errors} />
      {children}
    </Container>
  );
};
