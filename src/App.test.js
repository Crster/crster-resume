import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile', () => {
  render(<App />);
  const nameElement = screen.getByText(/Amiel Hussien A. Dagadas/i);
  expect(nameElement).toBeInTheDocument();
});
