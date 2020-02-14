"use strict";

var _nodeMocksHttp = _interopRequireDefault(require("node-mocks-http"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should return the get of api response', () => {
  const req = _nodeMocksHttp.default.createRequest();

  const res = _nodeMocksHttp.default.createResponse();

  const data = (0, _.get)(req, res);
  expect(data._getJSONData()).toMatchSnapshot();
});