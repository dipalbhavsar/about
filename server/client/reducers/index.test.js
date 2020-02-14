"use strict";

var _redux = require("redux");

var _ = require(".");

var _pages = require("./pages");

var _sagaPage = require("./sagaPage");

const store = (0, _redux.createStore)(_.rootReducer);
test('should return rootReducer', () => {
  expect(store.getState().pages).toEqual((0, _pages.reducer)(undefined, {
    type: undefined
  }));
  expect(store.getState().sagaPage).toEqual((0, _sagaPage.reducer)(undefined, {
    type: undefined
  }));
});