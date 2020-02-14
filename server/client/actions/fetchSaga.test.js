"use strict";

var actions = _interopRequireWildcard(require("./fetchSaga"));

var _responseSchema = require("../../server/responseSchema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test("should create an action to fetch saga's code", () => {
  expect(actions.fetchSagaCode('2')).toMatchSnapshot();
});
test("should create a success action to fetch saga's code", () => {
  expect(actions.fetchSagaCodeSuccess(_responseSchema.sagaSamples)).toMatchSnapshot();
});
test("should create a failure action to fetch saga's code", () => {
  expect(actions.fetchSagaCodeFailure(new Error())).toMatchSnapshot();
});
test('should create an action to add like count', () => {
  expect(actions.addLike(1)).toMatchSnapshot();
});
test('should create a success action to add like count', () => {
  expect(actions.addLikeSuccess(_responseSchema.sagaSamples[0])).toMatchSnapshot();
});
test('should create a failure action to add like count', () => {
  expect(actions.addLikeFailure(new Error())).toMatchSnapshot();
});