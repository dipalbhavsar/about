"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateNonceId = generateNonceId;
exports.csp = csp;

var helmet = _interopRequireWildcard(require("helmet"));

var _nanoid = _interopRequireDefault(require("nanoid"));

var _uaParserJs = _interopRequireDefault(require("ua-parser-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generateNonceId(req, res, next) {
  res.locals.nonce = Buffer.from((0, _nanoid.default)(32)).toString('base64');
  next();
} // google font: https://stackoverflow.com/a/34576000/7014700


const baseDirectives = {
  defaultSrc: ["'self'"],
  styleSrc: ["'unsafe-inline'", 'fonts.googleapis.com'],
  // for styled-components
  fontSrc: ["'self'", 'data: fonts.gstatic.com'],
  imgSrc: ["'self'", 'img.shields.io'],
  // for README
  connectSrc: ["'self'", 'img.shields.io', 'fonts.googleapis.com', 'fonts.gstatic.com'],
  // for service-worker
  workerSrc: ["'self'"]
}; // chrome, firefox

const lv3Directives = _objectSpread({}, baseDirectives, {
  scriptSrc: [(req, res) => `'nonce-${res.locals.nonce}'`, "'strict-dynamic'", "'unsafe-eval'"]
}); // safari
// TODO: cannot load a file to be imported as dynamic because cannot use strict-dynamic


const lv2Directives = _objectSpread({}, baseDirectives, {
  scriptSrc: ["'self", (req, res) => `'nonce-${res.locals.nonce}'`, "'unsafe-eval'", "'unsafe-inline'"]
});

function csp(req, res, next) {
  const directives = ['Chrome', 'Firefox'].includes( // TODO: fix
  (0, _uaParserJs.default)(req.headers['user-agent']).browser.name) ? lv3Directives : lv2Directives;
  helmet.contentSecurityPolicy({
    directives
  })(req, res, next);
}