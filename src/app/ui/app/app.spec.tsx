import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../../index';

it('should rended the app correctly', () => {
  render(<App />);
  // const linkElement = screen.getByText(/conduit/i);
  // expect(linkElement).toBeInTheDocument();
});
