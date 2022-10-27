import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer'

test('renders app', async() => {
  render(<Footer />);
  const linkedInIcon = await screen.findByTestId('list-group-item=linkedIn');
  expect(linkedInIcon).toBeInTheDocument();
});
