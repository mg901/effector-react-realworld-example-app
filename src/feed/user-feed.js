import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { fetchUserFeed } from './model.events';

export const UserFeed = () => {
  const isLoading = useStore(fetchUserFeed.pending);

  useEffect(() => {
    fetchUserFeed();
  }, []);

  return isLoading ? <div>Загрузка</div> : <div>User feed</div>;
};
