"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _.Head,
  title: 'Head'
};
exports.default = _default;

const Base = () => {
  // const [title, updateTitle] = useState('');
  // https://github.com/WordPress/gutenberg/pull/18031
  // useEffect(() => {
  // updateTitle(document.title);
  // }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Head, {
    title: "storybook"
  }));
};

exports.Base = Base;