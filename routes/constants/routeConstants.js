const sourceType = {
  //TV and Print
  NYT: 'NYT',
  BUSINESS_INSIDER: 'BUSINESS_INSIDER',
  FINANCIAL_TIMES: 'FINANCIAL_TIMES',
  GUARDIAN: 'GUARDIAN',
  ESPN: 'ESPN',

  //Online News
  YAHOO: 'YAHOO',
  BING: 'BING',
  BUZZFEED: 'BUZZFEED',
  GOOGLE: 'GOOGLE',

  //Social Networks
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  REDDIT: 'REDDIT',
};

const SOURCE_TYPE_TO_CODE = {
  //TV and Print
  101: sourceType.NYT,
  102: sourceType.BUSINESS_INSIDER,
  103: sourceType.FINANCIAL_TIMES,
  104: sourceType.GUARDIAN,
  105: sourceType.ESPN,
};

const BASE_URL_MAP = {
  [sourceType.NYT]: {
    apiKey: 'gQp1DDZP5JaK97cJtNm6emctyn6b5HTo',
    baseUrl: 'https://api.nytimes.com',
  },
  // [sourceType.GUARDIAN]: {}
};

module.exports = {
  sourceType,
  BASE_URL_MAP,
  SOURCE_TYPE_TO_CODE,
};

