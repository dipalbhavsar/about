"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

function get(req, res) {
  return res.json({
    heath: 'ok'
  });
}