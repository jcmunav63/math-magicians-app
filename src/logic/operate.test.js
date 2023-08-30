import operate from './operate';
describe('Testing math operations', () => {


  test('Sum testing', () => {

    expect(operate(20, 30, '+')).toEqual('50');

    expect(operate(20, -30, '+')).toEqual('-10');

    expect(operate(-5, -10, '+')).toEqual('-15');
  });

}
);