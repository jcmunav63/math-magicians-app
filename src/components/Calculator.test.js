import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import Calculator from './Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button text="+" className="key1b" onClick={() => handleButtonClick()} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

// The user inputs 8 key. + key, 1 key & 0 key, = key
// Input shows first 8, then 10, & then 18
test('sum operation interaction', () => {
  render(<Calculator />);
  const button8 = screen.queryByText('8');
  expect(button8).toBeInTheDocument();
});
