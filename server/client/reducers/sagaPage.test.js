"use strict";

var _sagaPage = require("./sagaPage");

var actions = _interopRequireWildcard(require("../actions/fetchSaga"));

var _responseSchema = require("../../server/responseSchema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('should return the initial state', () => {
  expect((0, _sagaPage.reducer)(undefined, {
    type: undefined
  })).toEqual(_sagaPage.initialState);
});
test('should handle FETCH_SAGA_CODE', () => {
  expect((0, _sagaPage.reducer)(_sagaPage.initialState, actions.fetchSagaCode('2'))).toMatchSnapshot();
});
test('should handle FETCH_SAGA_CODE_SUCCESS', () => {
  expect((0, _sagaPage.reducer)(_sagaPage.initialState, actions.fetchSagaCodeSuccess(_responseSchema.sagaSamples))).toMatchSnapshot();
});
test('should handle FETCH_SAGA_CODE_FAILURE', () => {
  expect((0, _sagaPage.reducer)(_sagaPage.initialState, actions.fetchSagaCodeFailure(new Error('404')))).toMatchSnapshot();
});