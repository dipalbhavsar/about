"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _ = _interopRequireDefault(require("."));

var _reducers = require("../../../reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _.default,
  title: 'Top'
};
exports.default = _default;
const store = (0, _reduxMockStore.default)()(_reducers.initialState);

const Base = () => _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_.default, null));

exports.Base = Base;