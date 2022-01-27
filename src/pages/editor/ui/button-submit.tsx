import { memo } from 'react';
import { Button } from '@/shared/ui';
import { selectors } from '../model';

export const ButtonSubmit = memo(() => {
  const disabled = selectors.useCreateArticleLoading();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      form="editor"
      size="lg"
      type="submit"
    >
      Publish article
    </Button>
  );
});
