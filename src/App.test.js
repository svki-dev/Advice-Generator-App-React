import { render, screen } from '@testing-library/react';
import Advice from './Advice';

test('renders learn react link', () => {
  render(<Advice />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
