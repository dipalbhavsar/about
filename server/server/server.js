"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runServer = runServer;

var _http = require("http");

var _express = _interopRequireDefault(require("express"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _csp = require("./csp");

var _apollo = require("./apollo");

var _router = require("./router");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint @typescript-eslint/no-var-requires: 0 */
function runServer() {
  const app = (0, _express.default)();
  const port = process.env.PORT || 3000;
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); // CSP

  app.use(_csp.generateNonceId);
  app.use(_csp.csp); // compression

  app.use((0, _compression.default)({
    level: 5
  })); // HMR

  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');

    const webpackHotMiddleware = require('webpack-hot-middleware');

    const webpackDevMiddleware = require('webpack-dev-middleware');

    const config = require('../../webpack.client.config');

    const compiler = webpack(config);
    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,

      writeToDisk(filePath) {
        return /loadable-stats/.test(filePath);
      }

    }));
  } // setup apollo


  (0, _apollo.apollo)(app); // register routes

  (0, _router.router)(app);
  /* istanbul ignore next */

  if (process.env.NODE_ENV !== 'test') {
    const server = (0, _http.createServer)(app);
    server.listen(port, () => {
      console.log(`Listening on ${port}`);
    }); // https://stackoverflow.com/a/48710483/7014700

    server.on('error', err => {
      if (err.syscall !== 'listen') throw err;
      const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

      switch (err.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;

        default:
          throw err;
      }
    });
  }

  return app;
}