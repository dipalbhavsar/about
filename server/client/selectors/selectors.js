"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSagaCode = exports.getBaseUrl = exports.getEnv = void 0;

const getEnv = state => state.pages.env;

exports.getEnv = getEnv;

const getBaseUrl = state => state.pages.baseUrl;

exports.getBaseUrl = getBaseUrl;

const getSagaCode = state => state.sagaPage.samples;

exports.getSagaCode = getSagaCode;