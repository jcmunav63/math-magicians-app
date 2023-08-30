import operate from './operate';
describe('Testing math operations', () => {

  // Sum testing
  test('Sum testing', () => {

    expect(operate(20, 30, '+')).toEqual('50');

    expect(operate(20, -30, '+')).toEqual('-10');

    expect(operate(-5, -10, '+')).toEqual('-15');
  });

  // Subtraction testing
  test('Subtraction testing', () => {

    expect(operate(20, 30, '-')).toEqual('-10');

    expect(operate(20, -30, '-')).toEqual('50');

    expect(operate(-5, -10, '-')).toEqual('5');
  });

   // Multiplication testing
  test('Multiplication testing', () => {

    expect(operate(20, 30, 'x')).toEqual('600');

    expect(operate(20, -30, 'x')).toEqual('-600');

    expect(operate(-5, -10, 'x')).toEqual('50');
  });

}
);