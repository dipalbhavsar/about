"use strict";

var _redux = require("redux");

var selectors = _interopRequireWildcard(require("./"));

var _reducers = require("../reducers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('should return base-url', () => {
  const storeState = (0, _redux.createStore)(_reducers.rootReducer).getState();
  expect(selectors.getBaseUrl(storeState)).toMatchSnapshot();
});
test('should return saga code', () => {
  const storeState = (0, _redux.createStore)(_reducers.rootReducer).getState();
  expect(selectors.getSagaCode(storeState)).toMatchSnapshot();
});