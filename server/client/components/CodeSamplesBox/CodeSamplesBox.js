"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeSamplesBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Container = _styledComponents.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-template-rows: auto;
  grid-gap: 12px;
`;
const CodeBoxContainer = _styledComponents.default.div`
  word-break: break-all;
  border: 2px solid #333;
  padding: 0 12px;

  & > h2 {
    letter-spacing: 1px;
  }

  & > pre {
    background: #333;
    color: #f5f5f5;
    height: 240px;
    height: ${({
  isOpen
}) => isOpen ? '100%' : 'hidden'}
    padding: 12px;
    font-size: 1.2rem;
    overflow: auto;
  }
`;
const LikeButton = _styledComponents.default.a`
  border-bottom: 2px solid #ccc;
  cursor: pointer;
  margin-left: 4px;
  padding: 0 2px;
  user-select: none;
`;
const CollapseButton = _styledComponents.default.a``;

const CodeBox = ({
  children,
  id,
  name,
  likeCount,
  description,
  addLike
}) => {
  const [isOpen, changeState] = (0, _react.useState)(false);

  const onClick = () => {
    changeState(!isOpen);
  };

  return _react.default.createElement(CodeBoxContainer, {
    isOpen: isOpen
  }, _react.default.createElement("h2", null, name), likeCount, _react.default.createElement(LikeButton, {
    onClick: () => addLike(id),
    "data-testid": "like-button"
  }, "likes"), _react.default.createElement("p", null, description), _react.default.createElement(CollapseButton, {
    onClick: onClick,
    "data-testid": "collapse-button"
  }, isOpen ? 'close' : 'open'), _react.default.createElement("pre", null, children));
};

const CodeSamplesBox = ({
  samples,
  addLike
}) => {
  return _react.default.createElement(Container, null, samples.map((_ref) => {
    let {
      code,
      id
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["code", "id"]);

    return _react.default.createElement(CodeBox, _extends({
      key: id,
      id: id
    }, rest, {
      addLike: addLike
    }), code);
  }));
};

exports.CodeSamplesBox = CodeSamplesBox;