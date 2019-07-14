//Constants
const { sourceType } = require('../constants/routeConstants');

const adaptParamsForSourceCode = sourcecode => {
  switch (sourcecode) {
    case sourceType.GUARDIAN:
      return require('./Guardian');
    case sourceType.NYT:
      return require('./NYTimes');
    default:
      return require('./NYTimes');
  }
};

module.exports = adaptParamsForSourceCode;
