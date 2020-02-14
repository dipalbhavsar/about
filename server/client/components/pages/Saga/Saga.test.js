"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _reactRedux = require("react-redux");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _reactRouterDom = require("react-router-dom");

var _ = _interopRequireDefault(require("."));

var _reducers = require("../../../reducers");

var actions = _interopRequireWildcard(require("../../../actions/pages"));

var sagaActions = _interopRequireWildcard(require("../../../actions/fetchSaga"));

var _responseSchema = require("../../../../server/responseSchema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function run(state = {}) {
  const mockStore = (0, _reduxMockStore.default)()(_objectSpread({}, _reducers.initialState, {}, state));
  return (0, _react2.render)(_react.default.createElement(_reactRedux.Provider, {
    store: mockStore
  }, _react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: ['/saga'],
    keyLength: 0
  }, _react.default.createElement(_.default, null))));
}

test('should call loadSagaPage via useDispatch', () => {
  const loadSagaPage = jest.spyOn(actions, 'loadSagaPage');
  run();
  expect(loadSagaPage).toBeCalled();
});
test('should call loadSagaPage via useDispatch when IS_BROWSER is true', () => {
  process.env.IS_BROWSER = 'true';
  const loadSagaPage = jest.spyOn(actions, 'loadSagaPage');
  run();
  expect(loadSagaPage).toBeCalled();
}); // useCallback

test('should call addLike when a like button is clicked', () => {
  const addLike = jest.spyOn(sagaActions, 'addLike');
  const {
    container
  } = run({
    sagaPage: {
      samples: _responseSchema.sagaSamples
    }
  });
  const [box] = (0, _react2.getAllByTestId)(container, 'like-button');

  _react2.fireEvent.click(box);

  expect(addLike).toBeCalled();
});