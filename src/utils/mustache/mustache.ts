type CTX = Record<string, string>;

function parse(ctx: CTX) {
  return function parseToken(token: string, i: number): string {
    if (i % 2 === 0) return token;

    return ctx[token];
  };
}

function mustache(string: string, ctx: CTX) {
  const tokens = string.split(/\{\{|\}\}/);

  const res = tokens.map(parse(ctx));

  return res.join('');
}

export default mustache;
