"use strict";

var React = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _react2 = require("@testing-library/react");

var _reducers = require("../reducers");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let state;
let store;
jest.mock('./routes.ts', () => {
  return {
    LoadableTopPage: () => React.createElement("p", null, "top"),
    LoadableSagaPage: () => React.createElement("p", null, "saga"),
    LoadableApolloPage: () => React.createElement("p", null, "apollo"),
    LoadableNotFoundPage: () => React.createElement("p", null, "404")
  };
});
beforeEach(() => {
  state = (0, _redux.createStore)(_reducers.rootReducer).getState();
  store = (0, _reduxMockStore.default)()(state);
});
test('should render Top page', () => {
  const tree = (0, _react2.render)(React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_reactRouter.MemoryRouter, {
    initialEntries: [{
      pathname: '/',
      key: 'testKey'
    }]
  }, React.createElement(_.Router, null))));
  expect(tree.asFragment()).toMatchSnapshot();
});
test('should render Saga page', () => {
  const tree = (0, _react2.render)(React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_reactRouter.MemoryRouter, {
    initialEntries: [{
      pathname: '/saga',
      key: 'testKey'
    }]
  }, React.createElement(_.Router, null))));
  expect(tree.asFragment()).toMatchSnapshot();
});
test('should render Apollo page', () => {
  const tree = (0, _react2.render)(React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_reactRouter.MemoryRouter, {
    initialEntries: [{
      pathname: '/apollo',
      key: 'testKey'
    }]
  }, React.createElement(_.Router, null))));
  expect(tree.asFragment()).toMatchSnapshot();
});
test('should render 404 page', () => {
  const tree = (0, _react2.render)(React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_reactRouter.MemoryRouter, {
    initialEntries: [{
      pathname: '/noPath',
      key: 'testKey'
    }]
  }, React.createElement(_.Router, null))));
  expect(tree.asFragment()).toMatchSnapshot();
});