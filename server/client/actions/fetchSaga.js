"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLikeFailure = exports.ADD_LIKE_FAILURE = exports.addLikeSuccess = exports.ADD_LIKE_SUCCESS = exports.addLike = exports.ADD_LIKE = exports.fetchSagaCodeFailure = exports.FETCH_SAGA_CODE_FAILURE = exports.fetchSagaCodeSuccess = exports.FETCH_SAGA_CODE_SUCCESS = exports.fetchSagaCode = exports.FETCH_SAGA_CODE = void 0;
const FETCH_SAGA_CODE = 'FETCH_SAGA_CODE';
exports.FETCH_SAGA_CODE = FETCH_SAGA_CODE;

const fetchSagaCode = maxLength => ({
  type: FETCH_SAGA_CODE,
  payload: {
    maxLength
  }
});

exports.fetchSagaCode = fetchSagaCode;
const FETCH_SAGA_CODE_SUCCESS = 'FETCH_SAGA_CODE_SUCCESS';
exports.FETCH_SAGA_CODE_SUCCESS = FETCH_SAGA_CODE_SUCCESS;

const fetchSagaCodeSuccess = samples => ({
  type: FETCH_SAGA_CODE_SUCCESS,
  payload: {
    samples
  }
});

exports.fetchSagaCodeSuccess = fetchSagaCodeSuccess;
const FETCH_SAGA_CODE_FAILURE = 'FETCH_SAGA_CODE_FAILURE';
exports.FETCH_SAGA_CODE_FAILURE = FETCH_SAGA_CODE_FAILURE;

const fetchSagaCodeFailure = err => ({
  type: FETCH_SAGA_CODE_FAILURE,
  payload: {
    err
  }
});

exports.fetchSagaCodeFailure = fetchSagaCodeFailure;
const ADD_LIKE = 'ADD_LIKE';
exports.ADD_LIKE = ADD_LIKE;

const addLike = id => ({
  type: ADD_LIKE,
  payload: {
    id
  }
});

exports.addLike = addLike;
const ADD_LIKE_SUCCESS = 'ADD_LIKE_SUCCESS';
exports.ADD_LIKE_SUCCESS = ADD_LIKE_SUCCESS;

const addLikeSuccess = res => ({
  type: ADD_LIKE_SUCCESS,
  payload: {
    res
  }
});

exports.addLikeSuccess = addLikeSuccess;
const ADD_LIKE_FAILURE = 'ADD_LIKE_FAILURE';
exports.ADD_LIKE_FAILURE = ADD_LIKE_FAILURE;

const addLikeFailure = err => ({
  type: ADD_LIKE_FAILURE,
  payload: {
    err
  }
});

exports.addLikeFailure = addLikeFailure;