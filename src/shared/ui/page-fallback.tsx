import { FallbackProps } from 'react-error-boundary';
import { Page } from './page';

export const PageFallback = ({ error }: FallbackProps) => {
  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </Page>
  );
};
