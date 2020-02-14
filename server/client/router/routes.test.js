"use strict";

var _routes = require("./routes");

test('should resolve required modules', async () => {
  expect((await _routes.LoadableTopPage.load()).default.name).toEqual('Top');
  expect((await _routes.LoadableSagaPage.load()).default.name).toEqual('Saga');
  expect((await _routes.LoadableApolloPage.load()).default.name).toEqual('Apollo');
  expect((await _routes.LoadableNotFoundPage.load()).default.name).toEqual('NotFound');
});