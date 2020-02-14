"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _server = require("./server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @jest-environment node
 */
// if you don't change the jest environment, styled-components won't run
test('should return the favicon', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/favicon.ico');
  expect(res.status).toEqual(200);
});
test('should return the assets', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/public');
  expect(res.status).toEqual(301);
  expect(res.text.length).not.toEqual(0);
});
test('should return the api response of get::health', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/api/health');
  expect(res.status).toEqual(200);
  expect(res.text.length).not.toEqual(0);
});
test('should return the api response of get::saga', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/api/saga');
  expect(res.status).toEqual(200);
  expect(res.text.length).not.toEqual(0);
});
test('should return the api response of post::saga', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).post('/api/saga/1').send({
    id: 1
  });
  expect(res.status).toEqual(200);
  expect(res.text.length).not.toEqual(0);
});
test('should return the api response of get::graphql', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/graphql');
  expect(res.status).toEqual(400);
});
test('should return HTML', async () => {
  const app = (0, _server.runServer)();
  const res = await (0, _supertest.default)(app).get('/');
  expect(res.status).toEqual(200);
  expect(res.text.length).not.toEqual(0);
});