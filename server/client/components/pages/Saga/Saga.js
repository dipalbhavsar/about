"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saga = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _pages = require("../../../actions/pages");

var _fetchSaga = require("../../../actions/fetchSaga");

var _selectors = require("../../../selectors");

var _Head = require("../../Head");

var _CodeSamplesBox = require("../../CodeSamplesBox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Saga = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const samples = (0, _reactRedux.useSelector)(_selectors.getSagaCode);
  const {
    search
  } = (0, _reactRouterDom.useLocation)();
  const maxLength = new URLSearchParams(search).get('max');

  if (!process.env.IS_BROWSER) {
    dispatch((0, _pages.loadSagaPage)(maxLength));
  } else {
    (0, _react.useEffect)(() => {
      dispatch((0, _pages.loadSagaPage)(maxLength));
    }, []);
  }

  const like = (0, _react.useCallback)(id => {
    dispatch((0, _fetchSaga.addLike)(id));
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Head.Head, {
    title: "saga-page"
  }), _react.default.createElement("p", null, "get: get all samples"), _react.default.createElement("p", null, "post: add a like count"), samples.length !== 0 && _react.default.createElement(_CodeSamplesBox.CodeSamplesBox, {
    samples: samples,
    addLike: like
  }));
};

exports.Saga = Saga;