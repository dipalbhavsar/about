"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _routes = require("./routes");

var _App = require("../components/App");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Router = () => _react.default.createElement(_App.App, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/"
}, _react.default.createElement(_routes.LoadableTopPage, null)), _react.default.createElement(_reactRouterDom.Route, {
  path: "/saga"
}, _react.default.createElement(_routes.LoadableSagaPage, null)), _react.default.createElement(_reactRouterDom.Route, {
  path: "/apollo"
}, _react.default.createElement(_routes.LoadableApolloPage, null)), _react.default.createElement(_reactRouterDom.Route, null, _react.default.createElement(_routes.LoadableNotFoundPage, null))));

exports.Router = Router;