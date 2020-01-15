const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseTransaction extends ValueObject {
  constructor({
    action,
    amount,
    currencyCode,
    id,
    trackingCode,
    brandId,
    descriptor,
    parentId,
  } = {},
  isResponse) {
    super()
    this.importValue('action', action, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('amount', amount, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('id', id, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('brandId', brandId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('descriptor', descriptor, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('parentId', parentId, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAction() {
    return this.action
  }
  
  getAmount() {
    return this.amount
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
  
  getBrandId() {
    return this.brandId
  }
  
  getDescriptor() {
    return this.descriptor
  }
  
  getParentId() {
    return this.parentId
  }
  

}

module.exports = pv_ResponseTransaction
