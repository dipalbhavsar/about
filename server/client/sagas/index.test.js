"use strict";

var _ = require(".");

test('should register sagas', () => {
  expect((0, _.rootSaga)().next().value.payload).toHaveLength(2);
});