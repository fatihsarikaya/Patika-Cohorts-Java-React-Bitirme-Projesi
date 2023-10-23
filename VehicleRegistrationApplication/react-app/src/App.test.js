import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  console.log(screen.debug()); // Add this line for debugging
  expect(linkElement).toBeInTheDocument();
});
