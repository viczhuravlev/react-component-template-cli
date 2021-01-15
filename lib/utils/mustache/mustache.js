"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parse(values) {
    return function parseToken(token, i) {
        if (i % 2 === 0)
            return token;
        return values[token];
    };
}
function mustache(string, values) {
    const tokens = string.split(/\{\{|\}\}/);
    const res = tokens.map(parse(values));
    return res.join('');
}
exports.default = mustache;
