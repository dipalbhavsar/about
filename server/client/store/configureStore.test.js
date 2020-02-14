"use strict";

var _reduxSaga = require("redux-saga");

var _configureStore = require("./configureStore");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('should provide history', async () => {
  // memoryHistory
  {
    const {
      history
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('./configureStore')));
    expect(history.location).toHaveProperty('key');
  }
  jest.resetModules(); // browserHistory

  {
    process.env.IS_BROWSER = 'true';
    const {
      history
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('./configureStore')));
    expect(history.location).not.toHaveProperty('key');
  }
});
test('should have store and runSaga', () => {
  const {
    store,
    runSaga
  } = (0, _configureStore.configureStore)();
  expect(typeof store).toEqual('object');
  expect(typeof runSaga).toEqual('function');
});
describe('redux-saga', () => {
  let configureStore;
  let createSagaMiddleware;
  let spy;
  beforeEach(async () => {
    jest.resetModules();
    configureStore = (await Promise.resolve().then(() => _interopRequireWildcard(require('./configureStore')))).configureStore;
    createSagaMiddleware = await Promise.resolve().then(() => _interopRequireWildcard(require('redux-saga')));
    spy = jest.spyOn(createSagaMiddleware, 'default');
  });
  test('should create sagaMiddleware', async () => {
    configureStore();
    expect(spy).toBeCalled();
  });
  test('should run runSaga', async () => {
    process.env.IS_BROWSER = 'true';
    const {
      runSaga,
      store
    } = configureStore();
    const res = await Promise.race([runSaga(), new Promise(r => setTimeout(() => r('quit'), 500))]);
    expect(res).toEqual('quit');
    store.dispatch(_reduxSaga.END);
  });
});