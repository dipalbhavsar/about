"use strict";

var _path = require("path");

var _cluster = _interopRequireDefault(require("cluster"));

var _os = require("os");

var _dotenv = require("dotenv");

var _server = require("./server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isProd = process.env.NODE_ENV === 'production'; // If you compile server code with webpack, this is unnecessary.

(0, _dotenv.config)({
  path: isProd ? (0, _path.join)(__dirname, '../../../.env.prod') : (0, _path.join)(__dirname, '../../.env.dev')
});

if (isProd) {
  const numCPUs = (0, _os.cpus)().length;

  if (_cluster.default.isMaster) {
    [...new Array(numCPUs)].forEach(() => _cluster.default.fork()); // cluster manager

    _cluster.default.on('exit', (worker, code, signal) => {
      console.log(`Restarting ${worker.process.pid}. ${code || signal}`);

      _cluster.default.fork();
    });
  } else {
    (0, _server.runServer)();
  }
} else {
  (0, _server.runServer)();
}

process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1);
});
process.on('unhandledRejection', err => {
  console.error(err);
});