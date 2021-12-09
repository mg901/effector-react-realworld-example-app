import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../../index';

it('should rended the app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /a place to share your Effector knowledge/i,
  );
  expect(linkElement).toBeInTheDocument();
});
