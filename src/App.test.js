import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const branding = screen.getByText('Kathryn Herod');
  expect(branding).toBeInTheDocument();
});
