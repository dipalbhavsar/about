"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _ = require(".");

var _pages = require("../../reducers/pages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _.Header,
  title: 'Header'
};
exports.default = _default;
const store = (0, _reduxMockStore.default)()({
  pages: _pages.initialState
});

const Base = () => _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.MemoryRouter, {
  initialEntries: ['/'],
  keyLength: 0
}, _react.default.createElement(_.Header, null)));

exports.Base = Base;