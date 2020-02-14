"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApolloPageFailure = exports.LOAD_APOLLO_PAGE_FAILURE = exports.loadApolloPageSuccess = exports.LOAD_APOLLO_PAGE_SUCCESS = exports.loadApolloPage = exports.LOAD_APOLLO_PAGE = exports.loadSagaPageFailure = exports.LOAD_SAGA_PAGE_FAILURE = exports.loadSagaPageSuccess = exports.LOAD_SAGA_PAGE_SUCCESS = exports.loadSagaPage = exports.LOAD_SAGA_PAGE = exports.loadTopPageFailure = exports.LOAD_TOP_PAGE_FAILURE = exports.loadTopPageSuccess = exports.LOAD_TOP_PAGE_SUCCESS = exports.loadTopPage = exports.LOAD_TOP_PAGE = exports.loadAppProcessFailure = exports.LOAD_APP_PROCESS_FAILURE = exports.loadAppProcessSuccess = exports.LOAD_APP_PROCESS_SUCCESS = exports.loadAppProcess = exports.LOAD_APP_PROCESS = exports.resetPageStatus = exports.RESET_PAGES_STATUS = exports.setBaseUrl = exports.SET_BASE_URL = exports.setEnv = exports.SET_ENV = void 0;
const SET_ENV = 'SET_ENV';
exports.SET_ENV = SET_ENV;

const setEnv = env => ({
  type: SET_ENV,
  payload: {
    env
  }
});

exports.setEnv = setEnv;
const SET_BASE_URL = 'SET_BASE_URL';
exports.SET_BASE_URL = SET_BASE_URL;

const setBaseUrl = baseUrl => ({
  type: SET_BASE_URL,
  payload: {
    baseUrl
  }
});

exports.setBaseUrl = setBaseUrl;
const RESET_PAGES_STATUS = 'RESET_PAGES_STATUS';
exports.RESET_PAGES_STATUS = RESET_PAGES_STATUS;

const resetPageStatus = () => ({
  type: RESET_PAGES_STATUS
});

exports.resetPageStatus = resetPageStatus;
const LOAD_APP_PROCESS = 'LOAD_APP_PROCESS';
exports.LOAD_APP_PROCESS = LOAD_APP_PROCESS;

const loadAppProcess = () => ({
  type: LOAD_APP_PROCESS
});

exports.loadAppProcess = loadAppProcess;
const LOAD_APP_PROCESS_SUCCESS = 'LOAD_APP_PROCESS_SUCCESS';
exports.LOAD_APP_PROCESS_SUCCESS = LOAD_APP_PROCESS_SUCCESS;

const loadAppProcessSuccess = () => ({
  type: LOAD_APP_PROCESS_SUCCESS
});

exports.loadAppProcessSuccess = loadAppProcessSuccess;
const LOAD_APP_PROCESS_FAILURE = 'LOAD_APP_PROCESS_FAILURE';
exports.LOAD_APP_PROCESS_FAILURE = LOAD_APP_PROCESS_FAILURE;

const loadAppProcessFailure = err => ({
  type: LOAD_APP_PROCESS_FAILURE,
  payload: {
    err
  }
});

exports.loadAppProcessFailure = loadAppProcessFailure;
const LOAD_TOP_PAGE = 'LOAD_TOP_PAGE';
exports.LOAD_TOP_PAGE = LOAD_TOP_PAGE;

const loadTopPage = () => ({
  type: LOAD_TOP_PAGE
});

exports.loadTopPage = loadTopPage;
const LOAD_TOP_PAGE_SUCCESS = 'LOAD_TOP_PAGE_SUCCESS';
exports.LOAD_TOP_PAGE_SUCCESS = LOAD_TOP_PAGE_SUCCESS;

const loadTopPageSuccess = () => ({
  type: LOAD_TOP_PAGE_SUCCESS
});

exports.loadTopPageSuccess = loadTopPageSuccess;
const LOAD_TOP_PAGE_FAILURE = 'LOAD_TOP_PAGE_FAILURE';
exports.LOAD_TOP_PAGE_FAILURE = LOAD_TOP_PAGE_FAILURE;

const loadTopPageFailure = err => ({
  type: LOAD_TOP_PAGE_FAILURE,
  payload: {
    err
  }
});

exports.loadTopPageFailure = loadTopPageFailure;
const LOAD_SAGA_PAGE = 'LOAD_SAGA_PAGE';
exports.LOAD_SAGA_PAGE = LOAD_SAGA_PAGE;

const loadSagaPage = maxLength => ({
  type: LOAD_SAGA_PAGE,
  payload: {
    maxLength
  }
});

exports.loadSagaPage = loadSagaPage;
const LOAD_SAGA_PAGE_SUCCESS = 'LOAD_SAGA_PAGE_SUCCESS';
exports.LOAD_SAGA_PAGE_SUCCESS = LOAD_SAGA_PAGE_SUCCESS;

const loadSagaPageSuccess = () => ({
  type: LOAD_SAGA_PAGE_SUCCESS
});

exports.loadSagaPageSuccess = loadSagaPageSuccess;
const LOAD_SAGA_PAGE_FAILURE = 'LOAD_SAGA_PAGE_FAILURE';
exports.LOAD_SAGA_PAGE_FAILURE = LOAD_SAGA_PAGE_FAILURE;

const loadSagaPageFailure = err => ({
  type: LOAD_SAGA_PAGE_FAILURE,
  payload: {
    err
  }
});

exports.loadSagaPageFailure = loadSagaPageFailure;
const LOAD_APOLLO_PAGE = 'LOAD_APOLLO_PAGE';
exports.LOAD_APOLLO_PAGE = LOAD_APOLLO_PAGE;

const loadApolloPage = () => ({
  type: LOAD_APOLLO_PAGE
});

exports.loadApolloPage = loadApolloPage;
const LOAD_APOLLO_PAGE_SUCCESS = 'LOAD_APOLLO_PAGE_SUCCESS';
exports.LOAD_APOLLO_PAGE_SUCCESS = LOAD_APOLLO_PAGE_SUCCESS;

const loadApolloPageSuccess = () => ({
  type: LOAD_APOLLO_PAGE_SUCCESS
});

exports.loadApolloPageSuccess = loadApolloPageSuccess;
const LOAD_APOLLO_PAGE_FAILURE = 'LOAD_APOLLO_PAGE_FAILURE';
exports.LOAD_APOLLO_PAGE_FAILURE = LOAD_APOLLO_PAGE_FAILURE;

const loadApolloPageFailure = err => ({
  type: LOAD_APOLLO_PAGE_FAILURE,
  payload: {
    err
  }
});

exports.loadApolloPageFailure = loadApolloPageFailure;