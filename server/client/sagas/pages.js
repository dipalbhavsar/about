"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagesProcess = pagesProcess;

var _reduxSaga = require("redux-saga");

var _effects = require("redux-saga/effects");

var _pages = require("../actions/pages");

var _fetchSaga = require("../actions/fetchSaga");

// e.g. write common processing to be performed on all pages
// don't call `stopSaga`
function* appProcess(actions) {
  yield (0, _effects.put)((0, _pages.setEnv)(process.env.NODE_ENV || 'development'));
  yield (0, _effects.put)((0, _pages.loadAppProcessSuccess)());
} // if you run async process, you have to change the code like below
// function* appProcess(actions: ReturnType<typeof LoadAppProcess>) {
//   try {
//     // async
//     yield put(loadAppProcessSuccess());
//   } catch (err) {
//     yield put(loadAppProcessFailure(err));
//   } finally {
//     if (!process.env.IS_BROWSER) {
//       yield call(stopSaga);
//     }
//   }
// }


function* loadTopPage(actions) {
  yield changePage();
  yield (0, _effects.put)((0, _pages.loadTopPageSuccess)());

  if (!process.env.IS_BROWSER) {
    yield (0, _effects.call)(stopSaga);
  }
}

function* loadSagaPage(actions) {
  try {
    yield changePage();
    yield (0, _effects.put)((0, _fetchSaga.fetchSagaCode)(actions.payload.maxLength));
    const res = yield (0, _effects.take)([_fetchSaga.FETCH_SAGA_CODE_SUCCESS, _fetchSaga.FETCH_SAGA_CODE_FAILURE]);

    if (res.type === _fetchSaga.FETCH_SAGA_CODE_FAILURE) {
      throw res.payload.err;
    }

    yield (0, _effects.put)((0, _pages.loadSagaPageSuccess)());
  } catch (err) {
    yield (0, _effects.put)((0, _pages.loadSagaPageFailure)(err));
  } finally {
    if (!process.env.IS_BROWSER) {
      yield (0, _effects.call)(stopSaga);
    }
  }
}

function* loadApolloPage(actions) {
  yield changePage();
  yield (0, _effects.put)((0, _pages.loadApolloPageSuccess)());

  if (!process.env.IS_BROWSER) {
    yield (0, _effects.call)(stopSaga);
  }
}

function* stopSaga() {
  yield (0, _effects.put)(_reduxSaga.END);
}

function* changePage() {
  // don't need to call resetPageStatus because baseUrl is required by fetch on Node.js environment,
  // also state has already been initialized at this time
  if (process.env.IS_BROWSER) {
    yield (0, _effects.put)((0, _pages.resetPageStatus)());
  }
}

function* pagesProcess() {
  yield (0, _effects.takeLatest)(_pages.LOAD_APP_PROCESS, appProcess);
  yield (0, _effects.takeLatest)(_pages.LOAD_TOP_PAGE, loadTopPage);
  yield (0, _effects.takeLatest)(_pages.LOAD_SAGA_PAGE, loadSagaPage);
  yield (0, _effects.takeLatest)(_pages.LOAD_APOLLO_PAGE, loadApolloPage);
}