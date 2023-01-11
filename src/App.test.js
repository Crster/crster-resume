import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile', () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Amiel Hussien A. Dagadas/i);
  expect(nameElement.length).toBe(2);
});
