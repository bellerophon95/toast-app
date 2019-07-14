//Lodash
const
  _isEmpty = require('lodash/isEmpty'),
  _reduce = require('lodash/reduce');

class RequestBuilder {

  constructor(baseParams) {
    if (_isEmpty(baseParams)) {
      return new Error('Malformed Url Exception: Base Params not defined');
    }

    const { baseUrl } = baseParams;
    if (_isEmpty(baseUrl)) {
      return new Error('Malformed Url Exception: Base Url not defined');
    }

    this.params = {
      baseUrl,
    };
  }

  pagination(startIndex, endIndex) {
    this.params.pagination = {
      startIndex,
      endIndex,
    };
    return this;
  }

  /*
  * Named parameter will append value to url https://xyz.com/parameter1/parameter2
  * */
  baseSuffix(params) {
    this.params.baseSuffix = _reduce(params, (suffix, param) => {
      suffix += `${param}`;
      return suffix;
    }, '');
    return this;
  }

  /**
   * Name parameter will append keys wih values https://xyz.com?.....&fisrtKey={firstValue}&secondKey={secondValue}
   */
  additionalParams(params) {
    this.params.additionalParamSuffix = _reduce(params, (suffix, param, key) => {
      suffix += `&${key}=${param}`;
      return suffix;
    }, '');
    return this;
  }

  build() {
    const {
      baseUrl,
      additionalParamSuffix = '',
      baseSuffix = '',
    } = this.params;

    return `${baseUrl}${baseSuffix}?${additionalParamSuffix}`;
  }
}

module.exports = RequestBuilder;
