import { memo } from 'react';
import { Button } from '@/shared/ui';
import * as article from '@/entities/foo';

export const ButtonSubmit = memo(() => {
  const disabled = article.selectors.useCreateArticleLoading();

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
