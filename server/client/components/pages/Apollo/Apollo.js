"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apollo = exports.ADD_LIKE = exports.GET_SAMPLES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reactApollo = require("react-apollo");

var _apolloBoost = require("apollo-boost");

var _pages = require("../../../actions/pages");

var _Head = require("../../Head");

var _CodeSamplesBox = require("../../CodeSamplesBox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const GET_SAMPLES = (0, _apolloBoost.gql)`
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
exports.GET_SAMPLES = GET_SAMPLES;
const ADD_LIKE = (0, _apolloBoost.gql)`
  mutation addLike($id: Int) {
    addLike(id: $id) {
      id
    }
  }
`;
exports.ADD_LIKE = ADD_LIKE;

const Apollo = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    search
  } = (0, _reactRouterDom.useLocation)();
  const maxLength = new URLSearchParams(search).get('max');
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData
  } = (0, _reactApollo.useQuery)(GET_SAMPLES, {
    variables: {
      maxLength: Number(maxLength)
    }
  });
  const [addLike, {
    loading: mutationLoading,
    error: mutationError,
    data: mutationData
  }] = (0, _reactApollo.useMutation)(ADD_LIKE, {
    // need to optimize this because it's better to avoid fetching all data
    refetchQueries: [{
      query: GET_SAMPLES,
      variables: {
        maxLength: Number(maxLength)
      }
    }]
  });
  const like = (0, _react.useCallback)(id => {
    addLike({
      variables: {
        id
      }
    }); // if you want to use a local state variable, you have to specify it to `[]` because React captures this function
  }, []); // stop saga on Node.js

  if (!process.env.IS_BROWSER) {
    dispatch((0, _pages.loadApolloPage)());
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Head.Head, {
    title: "apollo-page"
  }), _react.default.createElement("p", null, "query: get all samples"), _react.default.createElement("p", null, "mutation: add a like count"), queryLoading && _react.default.createElement("p", null, "loading..."), queryError && _react.default.createElement("p", null, "error..."), queryData && _react.default.createElement(_CodeSamplesBox.CodeSamplesBox, {
    samples: queryData.samples,
    addLike: like
  }));
};

exports.Apollo = Apollo;