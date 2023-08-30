import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button text="+" className="key1b" onClick={() => handleButtonClick()} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
