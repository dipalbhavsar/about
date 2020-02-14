"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoadingCompletion: false,
  error: null,
  baseUrl: '',
  env: 'development'
};
exports.initialState = initialState;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENV':
      return _objectSpread({}, state, {
        env: action.payload.env
      });

    case 'RESET_PAGES_STATUS':
      return initialState;

    case 'SET_BASE_URL':
      return _objectSpread({}, state, {
        baseUrl: action.payload.baseUrl
      });

    case 'LOAD_TOP_PAGE':
    case 'LOAD_SAGA_PAGE':
    case 'LOAD_APOLLO_PAGE':
      return _objectSpread({}, state, {
        isLoadingCompletion: false
      });

    case 'LOAD_TOP_PAGE_SUCCESS':
    case 'LOAD_SAGA_PAGE_SUCCESS':
    case 'LOAD_APOLLO_PAGE_SUCCESS':
      return _objectSpread({}, state, {
        isLoadingCompletion: true
      });

    case 'LOAD_TOP_PAGE_FAILURE':
    case 'LOAD_SAGA_PAGE_FAILURE':
    case 'LOAD_APOLLO_PAGE_FAILURE':
      return _objectSpread({}, state, {
        isLoadingCompletion: true,
        error: action.payload.err
      });

    default:
      return state;
  }
};

exports.reducer = reducer;