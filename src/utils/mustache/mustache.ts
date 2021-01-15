type Values = Record<string, string>;

function parse(values: Values) {
  return function parseToken(token: string, i: number): string {
    if (i % 2 === 0) return token;

    return values[token];
  };
}

function mustache(string: string, values: Values) {
  const tokens = string.split(/\{\{|\}\}/);

  const res = tokens.map(parse(values));

  return res.join('');
}

export default mustache;
