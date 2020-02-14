"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.post = post;

var _responseSchema = require("../../responseSchema");

function getAll(req, res) {
  const maxLength = req.query.maxLength || _responseSchema.sagaSamples.length;
  return res.json({
    body: _responseSchema.sagaSamples.slice(0, Number(maxLength))
  });
}

function post(req, res) {
  const {
    id
  } = req.params;

  const item = _responseSchema.sagaSamples.find(({
    id: fileId
  }) => Number(id) === fileId);

  if (item) {
    ++item.likeCount;
    return res.json({
      body: item
    });
  } else {
    return res.status(404);
  }
}