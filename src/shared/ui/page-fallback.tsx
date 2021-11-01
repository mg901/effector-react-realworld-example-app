import { FallbackProps } from 'react-error-boundary';
import { Page } from './page';

export const PageFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </Page>
  );
};
