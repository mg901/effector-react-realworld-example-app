import React from 'react';
import { useGate } from 'effector-react';
import { GlobalFeedGate } from '../model';
import '../init';

export const GlobalFeedPage: React.FC = () => {
  useGate(GlobalFeedGate);

  return <h1>Global Feed</h1>;
};
