"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.resolvers = exports.typeDefs = void 0;

var _graphqlTools = require("graphql-tools");

var _responseSchema = require("../server/responseSchema");

const typeDefs = `
  type Sample {
    id: Int!
    code: String!
    name: String!
    likeCount: Int!
    description: String
  }

  type Query {
    samples(maxLength: Int): [Sample]
  }

  type Mutation {
    addLike(id: Int): Sample
  }
`;
exports.typeDefs = typeDefs;
const resolvers = {
  Query: {
    samples: (obj, {
      maxLength
    }) => {
      return _responseSchema.apolloSamples.slice(0, maxLength || _responseSchema.apolloSamples.length);
    }
  },
  Mutation: {
    addLike: (obj, {
      id
    }) => {
      const item = _responseSchema.apolloSamples.find(({
        id: fileId
      }) => id === fileId);

      if (item) {
        ++item.likeCount;
        return item;
      } else {
        throw new Error('Could not find');
      }
    }
  }
};
exports.resolvers = resolvers;
const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs,
  resolvers
});
exports.schema = schema;