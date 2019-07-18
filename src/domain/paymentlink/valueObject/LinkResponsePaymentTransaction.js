const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponsePaymentTransaction extends ValueObject {
  constructor({
    amount,
    brandId,
    currencyCode,
    id,
    trackingCode,
  } = {},
  isResponse) {
    super()
    this.importValue('amount', amount, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('brandId', brandId, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('id', id, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getAmount() {
    return this.amount
  }
  
  getBrandId() {
    return this.brandId
  }
  
  getCurrencyCode() {
    return this.currencyCode
  }
  
  getId() {
    return this.id
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  

}

module.exports = pv_LinkResponsePaymentTransaction
