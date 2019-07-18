const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutResponseRedirect extends ValueObject {
  constructor({
    method,
    url,
  } = {},
  isResponse) {
    super()
    this.importValue('method', method, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('url', url, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getMethod() {
    return this.method
  }
  
  getUrl() {
    return this.url
  }
  

}

module.exports = pv_CheckoutResponseRedirect
