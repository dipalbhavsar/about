"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apollo = apollo;

var _apolloServerExpress = require("apollo-server-express");

var _graphqlQueryComplexity = require("graphql-query-complexity");

var _graphql = require("graphql");

var _schema = require("../graphql/schema");

var _constants = require("../graphql/constants");

function apollo(app) {
  const apollo = new _apolloServerExpress.ApolloServer({
    debug: process.env.NODE_ENV !== 'production',
    schema: _schema.schema,
    resolvers: _schema.resolvers,
    playground: process.env.NODE_ENV !== 'production' ? {
      endpoint: _constants.endpoint
    } : false,
    plugins: [{
      requestDidStart: () => ({
        didResolveOperation({
          request,
          document
        }) {
          const complexity = (0, _graphqlQueryComplexity.getComplexity)({
            schema: _schema.schema,
            query: request.operationName ? (0, _graphql.separateOperations)(document)[request.operationName] : document,
            variables: request.variables,
            estimators: [(0, _graphqlQueryComplexity.fieldExtensionsEstimator)(), (0, _graphqlQueryComplexity.simpleEstimator)({
              defaultComplexity: 1
            })]
          });

          if (complexity >= _constants.limitCost) {
            throw new Error(`${complexity} is over ${_constants.limitCost}`);
          }

          console.log('Used query complexity points:', complexity);
        },

        didEncounterErrors({
          errors,
          request
        }) {
          // e.g. add a logger
          console.error(errors);
          console.error(request);
        }

      })
    }]
  });
  apollo.applyMiddleware({
    app,
    path: _constants.endpoint
  });
}