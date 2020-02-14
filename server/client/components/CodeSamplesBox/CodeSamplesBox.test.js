"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ = require(".");

var _responseSchema = require("../../../server/responseSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should handle collapse event', () => {
  const {
    container
  } = (0, _react2.render)(_react.default.createElement(_.CodeSamplesBox, {
    samples: _responseSchema.sagaSamples,
    addLike: jest.fn()
  }));
  const [box] = (0, _react2.getAllByTestId)(container, 'collapse-button');
  expect(box.textContent).toEqual('open');

  _react2.fireEvent.click(box);

  expect(box.textContent).toEqual('close');
});
test('should handle like callback', () => {
  const addLike = jest.fn();
  const {
    container
  } = (0, _react2.render)(_react.default.createElement(_.CodeSamplesBox, {
    samples: _responseSchema.sagaSamples,
    addLike: addLike
  }));
  const [box] = (0, _react2.getAllByTestId)(container, 'like-button');

  _react2.fireEvent.click(box);

  expect(addLike).toBeCalled();
});