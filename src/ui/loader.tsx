import React from 'react';

type Props = Readonly<{
  loading: boolean;
}>;
export const Loader: React.FC<Props> = ({ loading }) =>
  !loading ? null : <div>Loading...</div>;
