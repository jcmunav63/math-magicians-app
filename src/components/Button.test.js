import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<button type="button" onClick={() => onClick(text)}>
    'AC'
  </button>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
