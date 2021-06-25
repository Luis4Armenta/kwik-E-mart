import { say } from "../start";

describe('prueba', () => {
  test('start', () => {
    expect(say()).toBe('Hello World');
  });
});
