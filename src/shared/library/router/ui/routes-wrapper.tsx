import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { Page, Spinner } from 'shared/ui';

type RoutesWrapperProps = {
  children: React.ReactNode;
};

export const RoutesWrapper: React.FC<RoutesWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <ErrorBoundary FallbackComponent={PageFallback} key={location.pathname}>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export function PageFallback({ error }: FallbackProps): JSX.Element {
  return (
    <Page>
      <p>Ooops! Something went wrong:</p>
      <pre>{error.message}</pre>
    </Page>
  );
}
