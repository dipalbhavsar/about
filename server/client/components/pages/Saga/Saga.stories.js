"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _reactRouterDom = require("react-router-dom");

var _ = _interopRequireDefault(require("."));

var _reducers = require("../../../reducers");

var _responseSchema = require("../../../../server/responseSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _.default,
  title: 'Saga'
};
exports.default = _default;
const store = (0, _reduxMockStore.default)()(_objectSpread({}, _reducers.initialState, {
  sagaPage: {
    samples: _responseSchema.sagaSamples
  }
}));

const Base = () => _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.MemoryRouter, {
  initialEntries: ['/saga'],
  keyLength: 0
}, _react.default.createElement(_.default, null)));

exports.Base = Base;