import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i, { selector: 'a' }); // Specify the <a> tag as the selector
  console.log(screen.debug()); // Add this line for debugging
  expect(linkElement).toBeInTheDocument();
});
