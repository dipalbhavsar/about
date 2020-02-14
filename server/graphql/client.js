"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;

var _apolloBoost = require("apollo-boost");

// link is an argument because schema.ts used by SchemaLink uses `fs` module
function createClient({
  link
}) {
  return new _apolloBoost.ApolloClient({
    ssrMode: !process.env.IS_BROWSER,
    link,
    cache: process.env.IS_BROWSER ? new _apolloBoost.InMemoryCache().restore(window.__APOLLO_STATE__) : new _apolloBoost.InMemoryCache()
  });
}