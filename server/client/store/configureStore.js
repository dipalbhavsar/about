"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = exports.history = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _history = require("history");

var _developmentOnly = require("redux-devtools-extension/developmentOnly");

var _reducers = require("../reducers");

var _sagas = require("../sagas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const history = process.env.IS_BROWSER ? (0, _history.createBrowserHistory)() : (0, _history.createMemoryHistory)();
exports.history = history;

const createEnhancer = sagaMiddleware => {
  const composeEnhancers = (0, _developmentOnly.composeWithDevTools)({});
  return composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware));
};

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = (0, _reduxSaga.default)();
  const enhancer = createEnhancer(sagaMiddleware);
  const store = (0, _redux.createStore)(_reducers.rootReducer, preloadedState, enhancer);

  const runSaga = async () => {
    return sagaMiddleware.run(_sagas.rootSaga).toPromise();
  }; // for client-side


  if (process.env.IS_BROWSER) {
    runSaga();
  }
  /* istanbul ignore next */


  if (module.hot) {
    module.hot.accept('../reducers', async () => {
      const {
        rootReducer
      } = await Promise.resolve().then(() => _interopRequireWildcard(require('../reducers')));
      store.replaceReducer(rootReducer);
    });
  }

  return {
    store,
    runSaga
  };
};

exports.configureStore = configureStore;