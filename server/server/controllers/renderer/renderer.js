"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _path = require("path");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = require("styled-components");

var _server2 = require("@loadable/server");

var _reactApollo = require("react-apollo");

var _apolloLinkSchema = require("apollo-link-schema");

var _renderFullPage = require("../../renderFullPage");

var _index = require("../../../client/router/index");

var _configureStore = require("../../../client/store/configureStore");

var _client = require("../../../graphql/client");

var _schema = require("../../../graphql/schema");

var _pages = require("../../../client/actions/pages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const statsFile = (0, _path.resolve)(__dirname, process.env.NODE_ENV !== 'production' ? '../../../../dist/client/loadable-stats.json' : '../../../../client/loadable-stats.json');

async function get(req, res) {
  const baseUrl = `${req.protocol}://${req.get('Host')}`;
  const {
    nonce
  } = res.locals;
  const {
    store,
    runSaga
  } = (0, _configureStore.configureStore)();
  const client = (0, _client.createClient)({
    link: new _apolloLinkSchema.SchemaLink({
      schema: _schema.schema
    })
  });
  const sheet = new _styledComponents.ServerStyleSheet();
  const context = {}; // for Node.js because `fetch` requires absolute URLs

  store.dispatch((0, _pages.setBaseUrl)(baseUrl));

  const App = () => _react.default.createElement(_reactApollo.ApolloProvider, {
    client: client
  }, _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement("div", {
    id: "root"
  }, _react.default.createElement(_index.Router, null)))));

  try {
    const extractor = new _server2.ChunkExtractor({
      statsFile
    });
    const tree = extractor.collectChunks(_react.default.createElement(App, null));
    await Promise.all([// kick apollo, redux-saga, and styled-components
    (0, _reactApollo.getMarkupFromTree)({
      tree,
      renderFunction: _server.renderToStaticMarkup
    }), runSaga()]);
    const body = (0, _server.renderToString)(tree);
    const preloadedState = JSON.stringify(store.getState());

    const helmetContent = _reactHelmet.default.renderStatic();

    const meta = `
      ${helmetContent.meta.toString()}
      ${helmetContent.title.toString()}
    `.trim();
    const style = sheet.getStyleTags();
    const scripts = extractor.getScriptTags({
      nonce
    });
    const graphql = JSON.stringify(client.extract());
    return res.send((0, _renderFullPage.renderFullPage)({
      meta,
      body,
      style,
      preloadedState,
      scripts,
      graphql,
      nonce
    }));
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}