"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = router;

var express = _interopRequireWildcard(require("express"));

var health = _interopRequireWildcard(require("./controllers/health"));

var renderer = _interopRequireWildcard(require("./controllers/renderer"));

var saga = _interopRequireWildcard(require("./controllers/saga"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function router(app) {
  app.use('/favicon.ico', (req, res) => res.status(200).send());
  app.use('/robots.txt', express.static('dist/client/robots.txt')); // for PWA

  app.use('/service-worker.js', express.static('dist/client/service-worker.js'));
  app.use('/manifest.webmanifest', express.static('dist/client/manifest.webmanifest'));
  app.use('/public', express.static('dist/client'));
  app.get('/api/health', health.get); // rest

  app.get('/api/saga', saga.getAll);
  app.post('/api/saga/:id', saga.post); // graphql

  app.get('/api/apollo', health.get);
  app.get('*', renderer.get);
}