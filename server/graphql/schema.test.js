"use strict";

var _graphql = require("graphql");

var _schema = require("./schema");

var _responseSchema = require("../server/responseSchema");

test('should return result from samples resolver', async () => {
  const GET_SAMPLES = `
    query getSamples($maxLength: Int) {
      samples(maxLength: $maxLength) {
        id
        name
        code
        likeCount
        description
      }
    }
  `;
  const res = await (0, _graphql.graphql)(_schema.schema, GET_SAMPLES, null, {
    samples: _responseSchema.apolloSamples
  }, {
    maxLength: 1
  });
  expect(res).toMatchSnapshot();
});
test('should return result from addLike resolver', async () => {
  const ADD_LIKE = `
    mutation addLike($id: Int) {
      addLike(id: $id) {
        id
      }
    }
  `;
  {
    const res = await (0, _graphql.graphql)(_schema.schema, ADD_LIKE, null, {
      samples: _responseSchema.apolloSamples
    }, {
      id: 1
    });
    expect(res).toMatchSnapshot();
  }
  {
    const res = await (0, _graphql.graphql)(_schema.schema, ADD_LIKE, null, {
      samples: _responseSchema.apolloSamples
    }, {
      id: 1000
    });
    expect(res).toMatchSnapshot();
  }
});