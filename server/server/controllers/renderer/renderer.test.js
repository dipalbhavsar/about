"use strict";

var _nodeMocksHttp = _interopRequireDefault(require("node-mocks-http"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test.skip('should return the get of renderer response', async () => {
  const req = _nodeMocksHttp.default.createRequest({
    url: '/apollo'
  });

  const res = _nodeMocksHttp.default.createResponse();

  const data = await (0, _.get)(req, res);
  console.log(data._getData());
});
test('should return 500 when occur internal errors', async () => {
  jest.resetModules();
  jest.mock('@loadable/server', () => {
    return {
      ChunkExtractor: () => {
        return new Error();
      }
    };
  });
  const {
    get
  } = await Promise.resolve().then(() => _interopRequireWildcard(require('.')));

  const req = _nodeMocksHttp.default.createRequest();

  const res = _nodeMocksHttp.default.createResponse();

  const data = await get(req, res);
  expect(data.statusCode).toEqual(500);
});