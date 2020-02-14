"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSaga = rootSaga;

var _effects = require("redux-saga/effects");

var _pages = require("./pages");

var _fetchSaga = require("./fetchSaga");

/**
 * Root for saga
 */
function* rootSaga() {
  yield (0, _effects.all)([(0, _effects.fork)(_pages.pagesProcess), (0, _effects.fork)(_fetchSaga.fetchSagaProcess)]);
}