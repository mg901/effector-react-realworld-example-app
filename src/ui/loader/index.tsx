import React from 'react';
import './index.css';

type Props = Readonly<{
  loading: boolean;
}>;
export const Loader: React.FC<Props> = ({ loading }) =>
  !loading ? null : <div className="loader">Loading...</div>;
