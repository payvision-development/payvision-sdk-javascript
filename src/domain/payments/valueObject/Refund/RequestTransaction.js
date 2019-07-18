const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestTransaction extends ValueObject {
  constructor({
    amount,
    currencyCode,
    trackingCode,
  } = {},
  isResponse) {
    super()
    this.importValue('amount', amount, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getAmount() {
    return this.amount
  }
  
  getCurrencyCode() {
    return this.currencyCode
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  

}

module.exports = pv_RequestTransaction
