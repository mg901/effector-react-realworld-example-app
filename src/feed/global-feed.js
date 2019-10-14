import React, { useEffect } from 'react';
import { useStore, useList, useStoreMap } from 'effector-react';
import { fetchGlobalFeed } from './model.events';
import { $globalFeed } from './model';

fetchGlobalFeed();

export const GlobalFeed = () => {
  const isLoading = useStore(fetchGlobalFeed.pending);

  return isLoading ? <div>Загрузка</div> : <h1>Global feed</h1>;
};
