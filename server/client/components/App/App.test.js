"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _reactRedux = require("react-redux");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _reactRouterDom = require("react-router-dom");

var _ = require(".");

var _reducers = require("../../reducers");

var actions = _interopRequireWildcard(require("../../actions/pages"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should call loadAppProcess via useDispatch', () => {
  const mockStore = (0, _reduxMockStore.default)()(_reducers.initialState); // browser

  {
    process.env.IS_BROWSER = 'true';
    const loadAppProcess = jest.spyOn(actions, 'loadAppProcess');
    (0, _react2.render)(_react.default.createElement(_reactRedux.Provider, {
      store: mockStore
    }, _react.default.createElement(_reactRouterDom.MemoryRouter, {
      initialEntries: ['/'],
      keyLength: 0
    }, _react.default.createElement(_.App, null))));
    expect(loadAppProcess).toBeCalled();
    delete process.env.IS_BROWSER;
    loadAppProcess.mockClear();
  } // server

  {
    const loadAppProcess = jest.spyOn(actions, 'loadAppProcess');
    (0, _react2.render)(_react.default.createElement(_reactRedux.Provider, {
      store: mockStore
    }, _react.default.createElement(_reactRouterDom.MemoryRouter, {
      initialEntries: ['/'],
      keyLength: 0
    }, _react.default.createElement(_.App, null))));
    expect(loadAppProcess).toBeCalled();
    loadAppProcess.mockClear();
  }
});