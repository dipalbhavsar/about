"use strict";

var _renderFullPage = require("./renderFullPage");

test('should create safe html', () => {
  const meta = '<meta>meta</meta>';
  const style = '<style>style</style>';
  const body = '<body>body</body>';
  const preloadedState = JSON.stringify({
    arr: ['foo', 'bar'],
    obj: {
      foo: 1,
      bar: 1
    },
    str: 'テスト'
  });
  const scripts = '<script>window</script>';
  const graphql = 'graphql';
  const nonce = 'nonce';
  expect((0, _renderFullPage.renderFullPage)({
    meta,
    style,
    body,
    preloadedState,
    scripts,
    graphql,
    nonce
  })).toMatchSnapshot();
});