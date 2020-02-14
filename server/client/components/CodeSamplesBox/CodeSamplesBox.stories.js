"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _.CodeSamplesBox,
  title: 'CodeSamplesBox'
};
exports.default = _default;

const Base = () => _react.default.createElement(_.CodeSamplesBox, {
  samples: [{
    id: 1,
    name: 'Foo',
    code: 'code\ncode\n',
    likeCount: 0,
    description: 'this is foo'
  }, {
    id: 2,
    name: 'Bar',
    code: 'code\ncode\n',
    likeCount: 0,
    description: 'this is bar'
  }],
  addLike: () => {}
});

exports.Base = Base;