"use strict";

var _nodeMocksHttp = _interopRequireDefault(require("node-mocks-http"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should return the getAll of api response', () => {
  const req = _nodeMocksHttp.default.createRequest({
    query: {
      maxLength: 1
    }
  });

  const res = _nodeMocksHttp.default.createResponse();

  const data = (0, _.getAll)(req, res);
  expect(data._getJSONData()).toMatchSnapshot();
});
test('should return the post of api response', () => {
  const res = _nodeMocksHttp.default.createResponse();

  {
    const req = _nodeMocksHttp.default.createRequest({
      params: {
        id: 1
      }
    });

    const data = (0, _.post)(req, res);
    expect(data._getJSONData()).toMatchSnapshot();
  }
  {
    const req = _nodeMocksHttp.default.createRequest({
      params: {
        id: 1000
      }
    });

    const data = (0, _.post)(req, res);
    expect(data._getJSONData()).toMatchSnapshot();
  }
});