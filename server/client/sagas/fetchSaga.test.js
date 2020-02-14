"use strict";

var _reduxSagaTestPlan = require("redux-saga-test-plan");

var _pages = require("../reducers/pages");

var _fetchSaga = require("./fetchSaga");

var actions = _interopRequireWildcard(require("../actions/fetchSaga"));

var _responseSchema = require("../../server/responseSchema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const state = {
  pages: _objectSpread({}, _pages.initialState, {
    baseUrl: 'http://test.com'
  })
};
test('should take on the FETCH_SAGA_CODE_SUCCESS action', () => {
  return (0, _reduxSagaTestPlan.expectSaga)(_fetchSaga.fetchSagaProcess).withState(state).provide({
    call: () => ({
      json: () => {
        return Promise.resolve({
          body: _responseSchema.sagaSamples
        });
      }
    })
  }).put(actions.fetchSagaCodeSuccess(_responseSchema.sagaSamples)).dispatch(actions.fetchSagaCode('2')).silentRun();
});
test('should take on the FETCH_SAGA_CODE_FAILURE action', () => {
  return (0, _reduxSagaTestPlan.expectSaga)(_fetchSaga.fetchSagaProcess).withState(state).provide({
    call: () => {
      throw new Error();
    }
  }).put(actions.fetchSagaCodeFailure(new Error())).dispatch(actions.fetchSagaCode('2')).silentRun();
});
test('should take on the ADD_LIKE_SUCCESS action', () => {
  return (0, _reduxSagaTestPlan.expectSaga)(_fetchSaga.fetchSagaProcess).withState(state).provide({
    call: () => ({
      json: () => {
        return Promise.resolve({
          body: _responseSchema.sagaSamples[0]
        });
      }
    })
  }).put(actions.addLikeSuccess(_responseSchema.sagaSamples[0])).dispatch(actions.addLike(1)).silentRun();
});
test('should take on the ADD_LIKE_FAILURE action', () => {
  return (0, _reduxSagaTestPlan.expectSaga)(_fetchSaga.fetchSagaProcess).withState(state).provide({
    call: () => {
      throw new Error();
    }
  }).put(actions.addLikeFailure(new Error())).dispatch(actions.addLike(1)).silentRun();
});