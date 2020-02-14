"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = exports.initialState = void 0;

var _redux = require("redux");

var _pages = require("./pages");

var _sagaPage = require("./sagaPage");

const initialState = {
  pages: _pages.initialState,
  sagaPage: _sagaPage.initialState
};
exports.initialState = initialState;
const rootReducer = (0, _redux.combineReducers)({
  pages: _pages.reducer,
  sagaPage: _sagaPage.reducer
});
exports.rootReducer = rootReducer;