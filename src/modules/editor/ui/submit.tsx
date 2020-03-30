import React from 'react';
import { useStore } from 'effector-react';
import { Button } from '../../../ui';
import { fxCreateArticle } from '../effects';
import { articleCreated } from '../events';

export const Submit: React.FC = () => {
  const loading = useStore(fxCreateArticle.pending);

  return (
    <Button disabled={loading} form="editor" onClick={articleCreated}>
      Publish Article
    </Button>
  );
};
