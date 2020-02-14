"use strict";

var actions = _interopRequireWildcard(require("./pages"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('should create an action to set a base-url', () => {
  expect(actions.setBaseUrl('url')).toMatchSnapshot();
});
test('should create an action to reset state', () => {
  expect(actions.resetPageStatus()).toMatchSnapshot();
});
test('should create an action to load app process', () => {
  expect(actions.loadAppProcess()).toMatchSnapshot();
});
test('should create a success action to load app process', () => {
  expect(actions.loadAppProcessSuccess()).toMatchSnapshot();
});
test('should create a failure action to load app process', () => {
  expect(actions.loadAppProcessFailure(new Error())).toMatchSnapshot();
});
test('should create an action to load Top page', () => {
  expect(actions.loadTopPage()).toMatchSnapshot();
});
test('should create a success action to load Top page', () => {
  expect(actions.loadTopPageSuccess()).toMatchSnapshot();
});
test('should create a failure action to load Top page', () => {
  expect(actions.loadTopPageFailure(new Error())).toMatchSnapshot();
});
test('should create an action to load Saga page', () => {
  expect(actions.loadSagaPage('2')).toMatchSnapshot();
});
test('should create a success action to load Saga page', () => {
  expect(actions.loadSagaPageSuccess()).toMatchSnapshot();
});
test('should create a failure action to load Saga page', () => {
  expect(actions.loadSagaPageFailure(new Error())).toMatchSnapshot();
});
test('should create an action to load Apollo page', () => {
  expect(actions.loadApolloPage()).toMatchSnapshot();
});
test('should create a success action to load Apollo page', () => {
  expect(actions.loadApolloPageSuccess()).toMatchSnapshot();
});
test('should create a failure action to load Apollo page', () => {
  expect(actions.loadApolloPageFailure(new Error())).toMatchSnapshot();
});