"use strict";

var _reduxSaga = require("redux-saga");

var _reduxSagaTestPlan = require("redux-saga-test-plan");

var _pages = require("./pages");

var actions = _interopRequireWildcard(require("../actions/pages"));

var fetchSagaActions = _interopRequireWildcard(require("../actions/fetchSaga"));

var _pages3 = require("../reducers/pages");

var _responseSchema = require("../../server/responseSchema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('LOAD_APP_PROCESS', () => {
  test('should call LOAD_APP_PROCESS_SUCCESS action', () => {
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.setEnv('test')).put(actions.loadAppProcessSuccess()).dispatch(actions.loadAppProcess()).silentRun();
  });
});
describe('LOAD_TOP_PAGE', () => {
  test('should call LOAD_TOP_PAGE_SUCCESS with SSR', () => {
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadTopPageSuccess()).put(_reduxSaga.END).dispatch(actions.loadTopPage()).silentRun();
  });
  test('should call LOAD_TOP_PAGE_SUCCESS action with CSR', () => {
    process.env.IS_BROWSER = 'true';
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadTopPageSuccess()).dispatch(actions.loadTopPage()).silentRun();
  });
});
describe('LOAD_SAGA_PAGE', () => {
  test('should call LOAD_SAGA_PAGE_SUCCESS with SSR', () => {
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadSagaPageSuccess()).put(_reduxSaga.END).dispatch(actions.loadSagaPage('1')).dispatch(fetchSagaActions.fetchSagaCodeSuccess(_responseSchema.sagaSamples)).silentRun();
  });
  test('should call LOAD_SAGA_PAGE_FAILURE with SSR', () => {
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadSagaPageFailure(new Error())).put(_reduxSaga.END).dispatch(actions.loadSagaPage('1')).dispatch(fetchSagaActions.fetchSagaCodeFailure(new Error())).silentRun();
  });
  test("shouldn't call END when CSR", () => {
    process.env.IS_BROWSER = 'true';
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadSagaPageSuccess()).dispatch(actions.loadSagaPage('1')).dispatch(fetchSagaActions.fetchSagaCodeSuccess(_responseSchema.sagaSamples)).silentRun();
  });
});
describe('LOAD_APOLLO_PAGE', () => {
  test('should call LOAD_APOLLO_PAGE_SUCCESS with SSR', () => {
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadApolloPageSuccess()).put(_reduxSaga.END).dispatch(actions.loadApolloPage()).silentRun();
  });
  test('should call LOAD_APOLLO_PAGE_SUCCESS action with CSR', () => {
    process.env.IS_BROWSER = 'true';
    return (0, _reduxSagaTestPlan.expectSaga)(_pages.pagesProcess).withState(_pages3.initialState).put(actions.loadApolloPageSuccess()).dispatch(actions.loadApolloPage()).silentRun();
  });
});