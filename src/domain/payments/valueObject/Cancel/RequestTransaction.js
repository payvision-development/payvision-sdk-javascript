const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestTransaction extends ValueObject {
  constructor({
    trackingCode,
  } = {},
  isResponse) {
    super()
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  

}

module.exports = pv_RequestTransaction
