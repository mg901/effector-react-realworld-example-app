import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './index';

it('should rended the app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /a place to share your effector knowledge./i,
  );
  expect(linkElement).toBeInTheDocument();
});
