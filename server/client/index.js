"use strict";

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _component = require("@loadable/component");

var _reactApollo = require("react-apollo");

var _apolloBoost = require("apollo-boost");

var _client = require("../graphql/client");

var _constants = require("../graphql/constants");

var _configureStore = require("./store/configureStore");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const {
  store
} = (0, _configureStore.configureStore)(initialData);
const client = (0, _client.createClient)({
  link: new _apolloBoost.HttpLink({
    uri: _constants.endpoint
  })
});

const render = async () => {
  const {
    Router
  } = await Promise.resolve().then(() => _interopRequireWildcard(require('./router')));
  renderMethod(React.createElement(_reactApollo.ApolloProvider, {
    client: client
  }, React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_reactRouterDom.BrowserRouter, null, React.createElement(Router, null)))), document.getElementById('root'));
};

(0, _component.loadableReady)(() => {
  render();
});

if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}