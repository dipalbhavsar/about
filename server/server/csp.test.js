"use strict";

var _csp = require("./csp");

test('should return random variable', () => {
  const req = jest.fn();
  const res = {
    locals: {
      nonce: null
    }
  };
  const next = jest.fn();
  (0, _csp.generateNonceId)(req, res, next);
  expect(next.mock.calls.length).toEqual(1);
  expect(typeof res.locals.nonce).toEqual('string');
});