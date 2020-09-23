import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate } from 'effector-react';
import { Container } from 'ui';
import { model } from '../model';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const ArticlePage: React.FC<Props> = ({ match: { params } }) => {
  useGate(model.PageGate, { params });

  return (
    <Container>
      <h1>Article</h1>
    </Container>
  );
};
