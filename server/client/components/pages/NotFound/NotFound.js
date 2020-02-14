"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _pages = require("../../../actions/pages");

var _Head = require("../../Head");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 2rem;
`;

const NotFound = () => {
  const dispatch = (0, _reactRedux.useDispatch)(); // TODO: fix

  dispatch((0, _pages.loadTopPage)());
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Head.Head, {
    title: "404-page"
  }), _react.default.createElement(Container, null, "[404] Not Found"));
};

exports.NotFound = NotFound;