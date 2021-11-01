import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { Page } from 'shared/ui';
import { Spinner } from '../../../ui';

export const RoutesWrapper: React.FC = ({ children }) => {
  const location = useLocation();

  return (
    <ErrorBoundary FallbackComponent={PageFallback} key={location.pathname}>
      <Suspense fallback={<Spinner show />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export const PageFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </Page>
  );
};
