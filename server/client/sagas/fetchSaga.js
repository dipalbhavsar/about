"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSagaProcess = fetchSagaProcess;

var _effects = require("redux-saga/effects");

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _fetchSaga = require("../actions/fetchSaga");

var _selectors = require("../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* fetchMethod({
  path,
  params,
  options
}) {
  const baseUrl = yield (0, _effects.select)(_selectors.getBaseUrl);
  const url = new URL(`${baseUrl || window.origin}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value || '');
    });
  }

  const res = yield (0, _effects.call)(_crossFetch.default, url.toString(), options);
  const {
    body
  } = yield res.json();
  return body;
}

function* fetchSagaCode(action) {
  try {
    const params = {
      maxLength: action.payload.maxLength
    };
    const body = yield fetchMethod({
      path: '/api/saga',
      params
    });
    yield (0, _effects.put)((0, _fetchSaga.fetchSagaCodeSuccess)(body));
  } catch (err) {
    yield (0, _effects.put)((0, _fetchSaga.fetchSagaCodeFailure)(err));
  }
}

function* addLike(action) {
  const {
    id
  } = action.payload;
  const options = {
    method: 'POST'
  };

  try {
    // actually, this method doesn't run on Node.js so it's unnecessary to create a full url
    const body = yield fetchMethod({
      path: `/api/saga/${id}`,
      options
    }); // need to optimize this because it's better to avoid fetching all data
    // currently, apollo's mutation uses `refetchQueries` so make the behavior the same.

    yield (0, _effects.put)((0, _fetchSaga.fetchSagaCode)(null));
    yield (0, _effects.put)((0, _fetchSaga.addLikeSuccess)(body));
  } catch (err) {
    yield (0, _effects.put)((0, _fetchSaga.addLikeFailure)(err));
  }
}

function* fetchSagaProcess() {
  yield (0, _effects.takeLatest)(_fetchSaga.FETCH_SAGA_CODE, fetchSagaCode);
  yield (0, _effects.takeLatest)(_fetchSaga.ADD_LIKE, addLike);
}