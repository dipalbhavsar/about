"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.GlobalStyle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Header = require("../Header");

var _pages = require("../../actions/pages");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  body {
    font-family: 'Muli', sans-serif;
    font-size:62.5%;
    margin: 0;
  }
`;
exports.GlobalStyle = GlobalStyle;
const Container = _styledComponents.default.div`
  margin: 15px 30px;
  font-size: 1rem;
`; // like App-Shell of PWA

const App = ({
  children
}) => {
  const location = (0, _reactRouterDom.useLocation)();
  const dispatch = (0, _reactRedux.useDispatch)();

  if (!process.env.IS_BROWSER) {
    dispatch((0, _pages.loadAppProcess)());
  } else {
    (0, _react.useEffect)(() => {
      dispatch((0, _pages.loadAppProcess)());
    }, []);
  } // change location
  // e.g. send to Google Analytics...


  (0, _react.useEffect)(() => {}, [location]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.Header, null), _react.default.createElement(GlobalStyle, null), _react.default.createElement(Container, null, children));
};

exports.App = App;