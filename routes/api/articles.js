//Library
const axios = require('axios');
const router = require('express').Router();
const createError = require('http-errors');

//Middleware
const credentialValidator = require('../../middlewares/credentialValidator');

//Builders
const RequestBuilder = require('../builders/RequestBuilder');

//Adapters
const adaptParamsForSourceCode = require('../sourceAdapters');

//Lodash
const _get = require('lodash/get');

//Constants
const { BASE_URL_MAP, SOURCE_TYPE_TO_CODE } = require('../constants/routeConstants');
const
  DEFAULT_START_INDEX = 1,
  DEFAULT_END_INDEX = 10;

/* GET  articles by filter*/
router.get('/', credentialValidator, (function (req, res, next) {
  const {
    query: {
      startIndex = DEFAULT_START_INDEX,
      endIndex = DEFAULT_END_INDEX,
      sourceId,
    },
  } = req;

  if (!sourceId) {
    next(createError(500));
  }

  const
    sourceCode = SOURCE_TYPE_TO_CODE[sourceId],
    { apiKey, baseUrl } = BASE_URL_MAP[sourceCode] || {},
    adaptedParamsToSend = adaptParamsForSourceCode(sourceCode)({ apiKey, startIndex, endIndex });

  const request =
    new RequestBuilder({ baseUrl })
      .baseSuffix(['/svc/search/v2/articlesearch.json'])
      .additionalParams(adaptedParamsToSend)
      .build();

  axios.get(request)
    .then(result => {
      res.json(result.data);
      next();
    })
    .catch(e => {
      next(createError(500));
    });
}));

module.exports = router;
