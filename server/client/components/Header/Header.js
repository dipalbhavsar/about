"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _selectors = require("../../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const A = (0, _styledComponents.default)(_reactRouterDom.Link)`
  color: #fff;
  text-decoration: none;
`;
const HeaderComponent = _styledComponents.default.header`
  align-items: center;
  background: #333;
  color: #f5f5f5;
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-between;
  padding: 15px 30px;
  & > * {
    text-align: center;
  }
`;

const Header = () => {
  const env = (0, _reactRedux.useSelector)(_selectors.getEnv);
  return React.createElement(HeaderComponent, null, React.createElement(A, {
    to: "/"
  }, '<'), React.createElement(A, {
    to: "/saga"
  }, "saga"), React.createElement(A, {
    to: "/apollo"
  }, "apollo"), React.createElement("span", null, env));
};

exports.Header = Header;