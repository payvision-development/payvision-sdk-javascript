const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutResponseHeader extends ValueObject {
  constructor({
    requestTimestamp,
  } = {},
  isResponse) {
    super()
    this.importValue('requestTimestamp', requestTimestamp, { type: 'datetime', required: isResponse ? false : true, isArray: false })
  }
  
  getRequestTimestamp() {
    return this.requestTimestamp
  }
  

}

module.exports = pv_CheckoutResponseHeader
