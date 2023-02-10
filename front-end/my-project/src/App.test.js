import { render, screen } from '@testing-library/react';
import ClickCount from './components/ClickCount';


test('renders learn react link', () => {
  render(<ClickCount/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
