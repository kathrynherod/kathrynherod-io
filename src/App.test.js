import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer'

test('renders footer & buttons', async() => {
  render(<Footer />);
  const linkedInButton = await screen.findByTestId('linkedIn-button');
  expect(linkedInButton).toBeInTheDocument();

  const githubButton = await screen.findByTestId('github-button');
  expect(githubButton).toBeInTheDocument();
});
