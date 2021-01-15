import mustache from './index';

describe('Mustache', () => {
  test('should replace name in the start', () => {
    const response = mustache('{{name}}, my name is', { name: 'Yoda' });

    expect(response).toEqual('Yoda, my name is');
  });

  test('should replace name in the end', () => {
    const response = mustache('My name is {{name}}', { name: 'Yoda' });

    expect(response).toEqual('My name is Yoda');
  });

  test('should replace all template', () => {
    const response = mustache("My name is {{name}} and I'm {{profession}}", {
      name: 'Yoda',
      profession: 'jedi',
    });

    expect(response).toEqual("My name is Yoda and I'm jedi");
  });

  test('should work even if two vars are next to each other', () => {
    const response = mustache('My name is {{firstPart}}{{secondPart}}', {
      firstPart: 'Foo',
      secondPart: 'bar',
    });

    expect(response).toEqual('My name is Foobar');
  });
});
