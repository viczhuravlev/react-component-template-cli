import mustache from './index';

describe('Mustache', () => {
  test('should replace strings', () => {
    const response = mustache('My name is {{name}}', { name: 'Yoda' });

    expect(response).toEqual('My name is Yoda');
  });

  test('should work even if the string starts with a var', () => {
    const response = mustache('{{name}}, my name is', { name: 'Yoda' });

    expect(response).toEqual('Yoda, my name is');
  });

  test('should work even if two vars are next to each other', () => {
    const response = mustache('{{first}}{{second}}, my name is', { first: 'Foo', second: 'bar' });

    expect(response).toEqual('Foobar, my name is');
  });
});
